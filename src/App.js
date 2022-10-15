import { IonApp, IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, setupIonicReact, useIonToast } from '@ionic/react';
import { play as playIcon } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Custom styles */
import './theme/variables.css';

setupIonicReact();

function App() {
  const [presentToast] = useIonToast();

  const handleClick = () => {
    presentToast({
      message: 'Hello world!',
      duration: 1500,
    });
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click Me
        </IonButton>
      </IonContent>
    </IonApp>
  );
}

export default App;
