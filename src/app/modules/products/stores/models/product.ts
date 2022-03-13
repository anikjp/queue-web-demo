export interface Product {
  id :string;
  name: string;
  model: string;
  price: number;
  tax: number;
  year: string;
  description: string;
  image: string;
}

export function getMockProducts(): Product[] {
  return [
    {
      id: '0001',
      name: 'iPhone 3G',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2008',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?1'
    },
    {
      id: '0002',
      name: 'iPhone 4',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2010',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?2'
    },
    {
      id: '0003',
      name: 'iPhone 5',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2012',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?3'
    },
    {
      id: '0004',
      name: 'iPhone 6',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2014',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?4'
    },
    {
      id: '0005',
      name: 'iPhone 7',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2016',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?5'
    },
    {
      id: '0006',
      name: 'iPhone X',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2017',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?6'
    },
    {
      id: '0007',
      name: 'iPhone XS',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2018',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?7'
    },
    {
      id: '0008',
      name: 'iPhone 8',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2017',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?8'
    },
    {
      id: '0009',
      name: 'iPhone XR',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2018',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?9'
    },
    {
      id: '0010',
      name: 'iPhone 11',
      model: 'Apple',
      price: 560,
      tax: 44,
      year: '2019',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      image: 'https://picsum.photos/1040?10'
    },

  ] as Product[];
}
