import React from 'react';

function MetaInfo({ meta }) {
  return (
    <div className="flex justify-center">
      {meta && (
        <div className="m-5 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-medium">Symbol Meta Information</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <li>
              <span className="font-medium">Currency:</span> {meta.currency}
            </li>
            <li>
              <span className="font-medium">Exchange:</span> {meta.exchange}
            </li>
            <li>
              <span className="font-medium">Exchange Timezone:</span> {meta.exchange_timezone}
            </li>
            <li>
              <span className="font-medium">MIC Code:</span> {meta.mic_code}
            </li>
            <li>
              <span className="font-medium">Symbol:</span> {meta.symbol}
            </li>
            <li>
              <span className="font-medium">Type:</span> {meta.type}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MetaInfo;
