import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import CityPicker from './CityPicker';

interface InformationPanelProps {
  city: string;
  lat: string;
  long: string;
  result: Root;
}

const InformationPanel: React.FC<InformationPanelProps> = ({
  city,
  lat,
  long,
  result,
}) => {
  return (
    <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-10'>
      <div className='pb-5'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='text-xs text-gray-400'>
          Long/Lat: {long}, {lat}
        </p>
      </div>
      <CityPicker />
      <hr className='my-10' />
      <div className='mt-5 items-center flex justify-between space-x-10'>
        <div>
          <p className='text-xl'>
            {new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className='font-extralight'>
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
};

export default InformationPanel;
