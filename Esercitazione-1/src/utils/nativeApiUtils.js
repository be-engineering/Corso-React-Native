import { Share, Linking } from 'react-native';

export const shareBy = (message: string, title: string, cb?: () => void) : Promise<*> => {
   return Share.share({
        message: message || 'Share by React Course',
        title: title || 'Condividi con ...'
    }).then(cb).catch(cb);
};
export const openWebUrl = (url: string, cb?: () => void) : Promise<*> => {
    return Linking.openURL(url).then(cb).catch(cb);
};
export const openMail = (mail: string, subject: string, body:string, cb?: () => void) : Promise<*> => { 
    Linking.openURL(`mailto://${mail}?subject=${subject}&body=${body}`)
    .then(cb)
    .catch(cb);
};
export const openPhoneNumber = (phoneNumber: string, cb?: () => void) : Promise<*> => {
    return Linking.openURL(`tel:${phoneNumber}`).then(cb).catch(cb);
};