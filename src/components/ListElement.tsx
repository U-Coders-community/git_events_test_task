import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Event} from '../types/events';
import {styles} from './ListElement.styles';
import {useNavigation} from '@react-navigation/native';

interface Props {
  event: Event;
  onPress: () => void;
  onExitFromDetails: () => void;
}

function ListElement({event, onPress, onExitFromDetails}: Props) {
  const {actor, repo} = event;
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        navigate('Details', {event, onExitFromDetails});
      }}
      style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>{actor.display_login}</Text>
        <Image style={styles.image} source={{uri: actor.avatar_url}} />
      </View>
      <Text style={styles.text}>{repo.name}</Text>
    </TouchableOpacity>
  );
}

export default ListElement;
