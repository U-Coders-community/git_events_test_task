import React, {useCallback} from 'react';
import {BackHandler, View, Text, Image, Button} from 'react-native';
import {Event} from '../../types/events';
import {styles} from './Details.styles';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {useEvents} from '../../hooks/useEvents';

interface Props {
  route: RouteProp<{
    params: {
      event: Event;
      onExitFromDetails: () => void;
    };
  }>;
}

function Details({route}: Props) {
  const {event, onExitFromDetails} = route.params;
  const {goBack} = useNavigation();
  const {loadEvents} = useEvents();
  const onBackPress = useCallback(() => true, []);

  useFocusEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: event.actor.avatar_url}} />
      </View>
      <Text style={styles.field}>User login: {event.actor.display_login}</Text>
      {event.org ? <Text style={styles.field}>{event.org?.login}</Text> : null}
      <Text style={styles.field}>Type: {event.type}</Text>
      <Text style={styles.field}>Repo: {event.repo.name}</Text>
      <Text style={styles.field}>
        Created at: {new Date(Date.parse(event.created_at)).toLocaleString()}
      </Text>
      <Text style={styles.field}>
        {event.public ? 'Public event' : 'Private event'}
      </Text>
      <Button
        title={'Go back'}
        onPress={async () => {
          onExitFromDetails();
          await loadEvents();
          goBack();
        }}
      />
    </View>
  );
}

export default Details;
