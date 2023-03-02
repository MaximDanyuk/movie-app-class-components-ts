/*eslint-disable */
import img from '../images/badConnaction.gif';
import { Detector } from 'react-detect-offline';
import React from 'react';

interface checkConnectionProps {
  children: React.ReactNode;
}

const CheckConnection: React.FC<checkConnectionProps> = ({
  children,
}) => {
  return (
    <Detector
      render={({ online }: { online: boolean }) =>
        online ? (
          children
        ) : (
          <div className="no-intenrnet-connection">
            <img src={img} alt="No wifi" />
            <h1 className="no-intenrnet-connection__title">
              No Connection
            </h1>
            <p> Please, check you internet connection</p>
          </div>
        )
      }
    />
  );
};
export default CheckConnection;
