import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {useEvents} from '../../hooks/useEvents';
import {useSelector} from 'react-redux';
import {StateInterface} from '../../types/state';
import ListElement from '../../components/ListElement';
import {styles} from './Main.styles';
import useTimeouts from '../../hooks/useTimeouts';

function Main() {
  const updateInterval = 60000;
  const {loadEvents} = useEvents();
  const {events} = useSelector((state: StateInterface) => state);
  const [refreshing, setRefreshing] = useState(false);
  const [allowRefresh, setAllowRefresh] = useState(false);

  const {intervalSet, intervalClear} = useTimeouts(() => {
    loadEvents();
  });
  const {reset, clear} = useTimeouts(() => setAllowRefresh(true));

  const onRefresh = () => {
    setRefreshing(true);
    loadEvents().then(() => {
      setAllowRefresh(false);
      reset();
      setRefreshing(false);
    });
  };
  useEffect(() => {
    loadEvents().then(() => {
      intervalSet(updateInterval);
      reset();
    });
  }, []);

  const onExitFromDetails = useCallback(() => {
    reset();
    intervalSet(updateInterval);
    setAllowRefresh(true);
  }, [reset, intervalSet]);

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            enabled={allowRefresh}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        }
        data={events}
        renderItem={({item}) => (
          <ListElement
            onExitFromDetails={onExitFromDetails}
            onPress={() => {
              clear();
              intervalClear();
            }}
            event={item}
          />
        )}
      />
    </View>
  );
}

export default Main;
