import React from 'react';

// Определение интерфейса для пропсов
interface CarsProps {
  image: string;
  title: string;
}

const Cars: React.FC<CarsProps> = ({ image, title }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={image} // Используем проп image
        width={600}
        height={400}
        alt="Car Image"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title.split(' ')[title.split(' ').length - 1]}</h3>
        <p className="text-gray-500 text-sm">{title.split(' ').slice(0, -1)}</p>
      </div>
    </div>
  );
}

export default Cars;
