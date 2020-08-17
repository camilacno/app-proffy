import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavIcon from '../../assets/images/icons/unfavorite.png';
import whatsIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/47459889?s=460&v=4',
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Camila Nepomuceno</Text>
          <Text style={styles.subject}>Inglês</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Bio do professor.
        {'\n'}
        {'\n'}
        Complemento da bio do professor.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
