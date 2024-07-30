import React from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';
// import { withIAPContext } from 'react-native-iap';
// import SubscriptionScreen from './SubscriptionScreen';
import MainAppContent from './MainAppContent';
// import * as RNIap from 'react-native-iap';

// const itemSubs = ['com.idenikey.subscription']; // Your subscription product ID

const App = () => {
  // const [isSubscribed, setIsSubscribed] = useState(null);

  // useEffect(() => {
  //   const checkSubscription = async () => {
  //     try {
  //       await RNIap.initConnection();
  //       const purchases = await RNIap.getAvailablePurchases();
  //       console.log(purchases);
  //       const subscription = purchases.find(
  //         (purchase) => purchase.productId === itemSubs[0]
  //       );

  //       if (subscription && !subscription.isAcknowledged) {
  //         const acknowledgePurchaseParams = {
  //           purchaseToken: subscription.purchaseToken,
  //         };
  //         const response = await RNIap.acknowledgePurchaseAndroid(acknowledgePurchaseParams);
  //         if (response) {
  //           console.log('Subscription acknowledged successfully');
  //         }
  //       }

  //       setIsSubscribed(!!subscription);
  //     } catch (err) {
  //       console.warn(err.code, err.message);
  //       setIsSubscribed(false);
  //     } finally {
  //       await RNIap.endConnection();
  //     }
  //   };

  //   checkSubscription();
  // }, []);

  // const updateSubscriptionStatus = () => {
  //   setIsSubscribed(true);
  // };

  // if (isSubscribed === null) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }
  // return isSubscribed ? <MainAppContent /> : <SubscriptionScreen onSubscribe={updateSubscriptionStatus} />;
  return <MainAppContent />;
};

export default App;
// export default withIAPContext(App);
