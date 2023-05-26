import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {IProps} from '../../types/generalProps';

const KeyboardAvoidWrapper: React.FC<IProps> = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
