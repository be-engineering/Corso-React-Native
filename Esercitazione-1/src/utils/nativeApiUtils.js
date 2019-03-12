import { Share, Linking } from 'react-native';

export const shareBy = (message: string, title: string) : Promise<*> => Share.share({
  message: message || 'Share by React Course',
  title: title || 'Condividi con ...',
});
export const openWebUrl = (url: string) : Promise<*> => Linking.openURL(url);
export const openMail = (mail: string, subject: string, body:string)
: Promise<*> => {
  Linking.openURL(`mailto://${mail}?subject=${subject}&body=${body}`);
};
export const openPhoneNumber = (phoneNumber: string) : Promise<*> => Linking.openURL(`tel:${phoneNumber}`).then(cb).catch(cb);
