import { IonButton, IonIcon, setupIonicReact, useIonToast } from '@ionic/react';
import { play as playIcon } from 'ionicons/icons';

import '@ionic/react/css/core.css';
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
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click Me
        </IonButton>
      </main>
    </div>
  );
}

export default App;
