import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fuel, Users, Gauge } from 'lucide-react';

// Import aircraft images
import piperArcherImg from '@/assets/piper-archer.jpg';
import cessna152Img from '@/assets/cessna-152.jpg';
import cessna172Img from '@/assets/cessna-172.jpg';
import piperCherokeeImg from '@/assets/piper-cherokee-six.jpg';
import twinComancheImg from '@/assets/twin-comanche.jpg';

const Fleet = () => {
  const aircraft = [
    {
      id: 1,
      name: 'Piper Archer',
      tailNumber: 'N130JM',
      image: piperArcherImg,
      category: 'Single Engine',
      seats: 4,
      cruiseSpeed: '140 kts',
      features: ['GPS/WAAS', 'Autopilot', 'Complex', 'High Performance'],
      description: 'Perfect for cross-country flights and commercial training'
    },
    {
      id: 2,
      name: 'Cessna 152',
      tailNumber: 'N46826',
      image: cessna152Img,
      category: 'Trainer',
      seats: 2,
      cruiseSpeed: '107 kts',
      features: ['Primary Trainer', 'Economical', 'Reliable'],
      description: 'Ideal for primary flight training and building hours'
    },
    {
      id: 3,
      name: 'Cessna 172',
      tailNumber: 'N736DU',
      image: cessna172Img,
      category: 'Single Engine',
      seats: 4,
      cruiseSpeed: '122 kts',
      features: ['GPS', 'Stable Platform', 'Forgiving'],
      description: 'The most popular training aircraft, perfect for all skill levels'
    },
    {
      id: 4,
      name: '1976 Piper Cherokee 6 (PA32-300)',
      tailNumber: 'N7039C',
      image: piperCherokeeImg,
      category: 'Single Engine',
      seats: 6,
      cruiseSpeed: '165 kts',
      engine: '300 HP Lycoming IO-540',
      usefulLoad: '1,416 lb',
      hourlyRate: '$250/Hour',
      features: ['Dual Garmin GTN 650', 'GNS 430 GPS', 'Garmin G5 Digital', 'JPI 930 Engine Monitor', 'ADS-B In & Out'],
      description: 'Need your high performance endorsement? Need the only 6 seater rental plane in the area? Need the useful load to carry around our 152 in the back? Or do you just want to experience all the joys of flying a Cherokee with some extra space and plenty of power. Whatever you need, N7039C does it.'
    },
    {
      id: 5,
      name: 'Piper Twin Comanche',
      tailNumber: 'N407AF',
      image: twinComancheImg,
      category: 'Multi-Engine',
      seats: 4,
      cruiseSpeed: '190 kts',
      features: ['Multi-Engine', 'Complex', 'High Performance', 'MEI Training'],
      description: 'Multi-engine aircraft for commercial and ATP training'
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Fleet
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From primary trainers to multi-engine aircraft, our diverse fleet provides 
            the right aircraft for every stage of your aviation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {aircraft.map((plane) => (
            <Card key={plane.id} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={plane.image} 
                  alt={`${plane.name} ${plane.tailNumber}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {plane.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{plane.name}</span>
                  <Badge variant="outline" className="font-mono text-sm">
                    {plane.tailNumber}
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {plane.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {plane.seats} seats
                  </div>
                  <div className="flex items-center">
                    <Gauge className="w-4 h-4 mr-1" />
                    {plane.cruiseSpeed}
                  </div>
                  {plane.engine && (
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 mr-1" />
                      {plane.engine}
                    </div>
                  )}
                </div>
                
                {(plane.usefulLoad || plane.hourlyRate) && (
                  <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                    {plane.usefulLoad && (
                      <div className="text-xs">
                        <strong>Useful Load:</strong> {plane.usefulLoad}
                      </div>
                    )}
                    {plane.hourlyRate && (
                      <div className="text-xs font-semibold text-primary">
                        {plane.hourlyRate}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {plane.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;