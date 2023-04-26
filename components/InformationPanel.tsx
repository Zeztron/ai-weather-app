import Image from 'next/image';
import CityPicker from './CityPicker';
import weatherCodeToString, { WeatherCode } from '@/lib/weatherCodeToString';

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
        <p className='text-xl font-bold uppercase'>
          {new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
      </div>
      <hr className='mt-10 mb-5' />
      <div>
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString(
                result.current_weather.weathercode as WeatherCode
              )?.icon
            }.png`}
            alt={
              weatherCodeToString(
                result.current_weather.weathercode as WeatherCode
              )!.label
            }
            width={75}
            height={75}
          />
          <div>
            <p>{result.current_weather.temperature.toFixed(1)}°C</p>
            <p>
              {
                weatherCodeToString(
                  result.current_weather.weathercode as WeatherCode
                )?.label
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
