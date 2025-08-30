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
      name: '1983 Piper Archer II (PA28-181)',
      tailNumber: 'N130JM',
      image: '/lovable-uploads/5e57c5db-d4b0-4f3d-a288-682cc13d4377.png',
      category: 'Single Engine',
      seats: 4,
      cruiseSpeed: '140 kts',
      engine: '180 HP Lycoming O-360',
      usefulLoad: '962 lb',
      hourlyRate: '$180/Hour',
      features: ['Garmin GTN 650 GPS', 'ADS-B In & Out', 'Surefly Electronic Ignition'],
      description: 'N130JM does it all! The proven design and forgiving flight characteristics make the Piper Archer the logical choice as a trainer. With 180 horsepower and space for 4, this plane easily meets so many missions for rated pilots too!'
    },
    {
      id: 2,
      name: '1979 Cessna 152',
      tailNumber: 'N46826',
      image: '/lovable-uploads/01febd13-67cd-4125-a2ea-81866c55961f.png',
      category: 'Trainer • Single Engine',
      seats: 2,
      cruiseSpeed: '107 kts',
      engine: '110 HP Lycoming O-235',
      usefulLoad: '502 lb',
      hourlyRate: '$120/Hour',
      features: ['Garmin GNS 430 WAAS GPS', 'ADS-B In & Out', 'Dual Glideslope'],
      description: "N46826 is perfect for hour building on a budget or for anyone who just enjoys flying low and slow. IFR GPS and dual glideslope indicators mean she's always prepared for shifting weather. You won't find a better rental at this price!"
    },
    {
      id: 3,
      name: '1977 Cessna R172K',
      tailNumber: 'N736DU',
      image: '/lovable-uploads/717c0e0a-fc87-4d69-8c69-9f1f2f6a0ba6.png',
      category: 'Single Engine',
      seats: 4,
      cruiseSpeed: '122 kts',
      engine: '195 HP Continental IO-360',
      usefulLoad: '957 lb',
      hourlyRate: '$200/Hour',
      features: ['Garmin GTN 750', 'Garmin G5 Digital', 'JPI 930 Engine Monitor', 'ADS-B In & Out'],
      description: "Looking for more horsepower than a slower standard Cessna while staying in a platform that's tried and true? This Cessna has more speed and capacity! It's the perfect IFR plane or the plane for flying all over the coast!"
    },
    {
      id: 4,
      name: '1976 Piper Cherokee 6 (PA32-300)',
      tailNumber: 'N7039C',
      image: '/lovable-uploads/ca3c3ffa-cb90-4bca-97d4-448f646051da.png',
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
      name: '1969 Piper Twin Comanche (PA30)',
      tailNumber: 'N407AF',
      image: '/lovable-uploads/77f5f865-395a-4b9f-a9a0-e4323b9af0ca.png',
      category: 'Multi-Engine',
      seats: 4,
      cruiseSpeed: '190 kts',
      engine: 'Twin 160 HP Lycoming IO-320',
      usefulLoad: '1,121 lb',
      hourlyRate: '$300/Hour',
      features: ['Multi-Engine', 'ADS-B In & Out', 'Dual Instruction Only'],
      description: 'Level up to multi-engine flying in style and comfort! Available for dual instruction only.'
    }
  ];

  return (
    <section id="fleet" className="pt-24 pb-12 bg-background">
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
          
          <div className="mt-12 mb-12">
            <div className="bg-primary/5 border border-border rounded-lg p-8 shadow-elegant">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                NOT JUST RENTAL PLANES
              </h3>
              <div className="w-16 h-1 bg-gradient-primary mx-auto mb-8"></div>
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Hot Shot, we take great pride in the how we care for our fleet. These aren't just rental planes, but our own personal aircraft. We keep them clean, stay proactive on maintenance, and invest in the upgrades that will make your flights (and ours) safer and more enjoyable.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From our Cessna 152 and Piper Archer, to our Twin Comanche and Cherokee 6, find out how we offer the best-kept airplanes at Van Nuys.
                </p>
              </div>
            </div>
          </div>
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