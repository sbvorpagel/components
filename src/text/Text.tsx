import React from 'react';
import { IonText } from '@ionic/react';

const Text: React.FC<{ value: string }> = ({ value }) => {
    return (
        <IonText><p>{value}</p></IonText>
    );
}

export default Text;