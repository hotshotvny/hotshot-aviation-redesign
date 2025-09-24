import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fuel, Users, Gauge, X } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import n7901cImage from '@/assets/n7901c-new.jpg';
import n42982Image from '@/assets/n42982-new.jpg';

const Fleet = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: fleetRef, visibleItems } = useStaggeredAnimation(7, 150);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; name: string } | null>(null);
  
  const aircraft = [
    {
      id: 1,
      name: '1979 Cessna 152',
      tailNumber: 'N46826',
      image: '/lovable-uploads/01febd13-67cd-4125-a2ea-81866c55961f.png',
      category: 'Single Engine',
      seats: 2,
      cruiseSpeed: '107 kts',
      engine: '110 HP Lycoming O-235',
      usefulLoad: '502 lb',
      hourlyRate: '$120/Hour',
      features: ['Garmin GNS 430 WAAS GPS', 'ADS-B In & Out', 'Dual Glideslope'],
      description: "N46826 is perfect for hour building on a budget or for anyone who just enjoys flying low and slow. IFR GPS and dual glideslope indicators mean she's always prepared for shifting weather. You won't find a better rental at this price!",
      topRightBadges: [],
      bottomBadges: ['Digital Engine Monitor']
    },
    {
      id: 2,
      name: 'Piper Archer II (PA28-181)',
      tailNumber: 'N7901C',
      image: n7901cImage,
      category: 'Single Engine',
      seats: 4,
      cruiseSpeed: '119 kts',
      engine: '180 HP Lycoming',
      usefulLoad: '500 lb',
      hourlyRate: '$175/Hour',
      features: ['Garmin GNS 430 GPS'],
      description: 'Straight-forward, reliable, and proven. N7901C offers the ideal platform for new pilots to gain experience. A Garmin GPS with ADSB traffic help keep you alert and safe.',
      topRightBadges: [],
      bottomBadges: ['ADSB In & Out']
    },
    {
      id: 3,
      name: '1983 Piper Archer II (PA28-181)',
      tailNumber: 'N130JM',
      image: '/lovable-uploads/5e57c5db-d4b0-4f3d-a288-682cc13d4377.png',
      category: 'Single Engine',
      seats: 4,
      cruiseSpeed: '119 kts',
      engine: '180 HP Lycoming O-360',
      usefulLoad: '962 lb',
      hourlyRate: '$180/Hour',
      features: ['Garmin GTN 650 WAAS GPS', 'ADS-B In & Out', 'Surefly Electronic Ignition'],
      description: 'N130JM does it all! The proven design and forgiving flight characteristics make the Piper Archer the logical choice as a trainer. With 180 horsepower and space for 4, this plane easily meets so many missions for rated pilots too!',
      topRightBadges: [],
      bottomBadges: []
    },
    {
      id: 4,
      name: 'Piper Archer II (PA28-181)',
      tailNumber: 'N42982',
      image: n42982Image,
      category: 'Single Engine',
      seats: 4,
      cruiseSpeed: '119 kts',
      engine: '180 HP Lycoming',
      usefulLoad: '956 lb',
      hourlyRate: '$185/Hour',
      features: ['Garmin GTN 650 GPS', 'Garmin 375 GPS', 'Dual Garmin G5\'s', 'Three-axis Autopilot', 'Bluetooth Audio Panel w/ ATC Replay'],
      description: 'With advanced avionics, N42982 gives its pilots a leg up on instrument training while building TAA time. All of this while offering everything that has made the Piper Archer such a popular choice for trainers everywhere.',
      topRightBadges: ['Technically Advanced Aircraft'],
      bottomBadges: []
    },
    {
      id: 5,
      name: '1977 Cessna R172K',
      tailNumber: 'N736DU',
      image: '/lovable-uploads/717c0e0a-fc87-4d69-8c69-9f1f2f6a0ba6.png',
      category: 'Single Engine',
      seats: 4,
      cruiseSpeed: '127 kts',
      engine: '195 HP Continental IO-360',
      usefulLoad: '957 lb',
      hourlyRate: '$200/Hour',
      features: ['Garmin GTN 750 WAAS GPS', 'Dual Garmin G5\'s', 'JPI 930 Engine Monitor', 'ADS-B In & Out'],
      description: "Looking for more horsepower than a slower standard Cessna while staying in a platform that's tried and true? This Cessna has more speed and capacity! It's the perfect IFR plane or the plane for flying all over the coast!",
      topRightBadges: [],
      bottomBadges: []
    },
    {
      id: 6,
      name: '1976 Piper Cherokee 6 (PA32-300)',
      tailNumber: 'N7039C',
      image: '/lovable-uploads/ca3c3ffa-cb90-4bca-97d4-448f646051da.png',
      category: 'Single Engine',
      seats: 6,
      cruiseSpeed: '145 kts',
      engine: '300 HP Lycoming IO-540',
      usefulLoad: '1,416 lb',
      hourlyRate: '$250/Hour',
      features: ['Garmin GTN 650 WAAS GPS', 'Dual Garmin G5\'s', 'JPI 930 Engine Monitor', 'ADS-B In & Out'],
      description: 'Need your high performance endorsement? Need the only 6 seater rental plane in the area? Need the useful load to carry around our 152 in the back? Or do you just want to experience all the joys of flying a Cherokee with some extra space and plenty of power. Whatever you need, N7039C does it.',
      topRightBadges: ['High Performance'],
      bottomBadges: []
    },
    {
      id: 7,
      name: '1969 Piper Twin Comanche (PA30)',
      tailNumber: 'N407AF',
      image: '/lovable-uploads/77f5f865-395a-4b9f-a9a0-e4323b9af0ca.png',
      category: 'Multi-Engine',
      seats: 4,
      cruiseSpeed: '170 kts',
      engine: 'Twin 160 HP Lycoming IO-320',
      usefulLoad: '1,121 lb',
      hourlyRate: '$330/Hour',
      features: ['Garmin GTN 750 WAAS GPS', 'Dual GI 275s', 'ADS-B In & Out', 'Dual Instruction Only'],
      description: 'Level up to multi-engine flying in style and comfort! Available for dual instruction only.',
      topRightBadges: ['Complex'],
      bottomBadges: ['Digital Engine Monitor']
    }
  ];

  return (
    <section id="fleet" className="pt-12 pb-12" style={{ background: 'var(--gradient-fleet)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in-up stagger-1 mobile-px">
            OUR FLEET
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 animate-scale-in stagger-2"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-3 mobile-px">
            From primary trainers to multi-engine aircraft, our diverse fleet provides 
            the right aircraft for every stage of your aviation journey
          </p>
          
          <div className="mt-12 mb-12">
            <div className="special-highlight-card rounded-lg p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                NOT JUST RENTAL PLANES
              </h3>
              <div className="w-16 h-1 bg-aviation-gold mx-auto mb-8"></div>
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <p className="text-lg leading-relaxed">
                  At Hot Shot, we take great pride in the how we care for our fleet. These aren't just rental planes, but our own personal aircraft. We keep them clean, stay proactive on maintenance, and invest in the upgrades that will make your flights (and ours) safer and more enjoyable.
                </p>
                <p className="text-lg leading-relaxed">
                  From our Cessna 152 and Piper Archer, to our Twin Comanche and Cherokee 6, find out how we offer the best-kept airplanes at Van Nuys.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={fleetRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mobile-px"
        >
          {aircraft.map((plane, index) => (
            <Card 
              key={plane.id} 
              className={`overflow-hidden shadow-elegant aviation-card transition-all duration-700 ${
                visibleItems[index] 
                  ? 'animate-fade-in-up opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden group cursor-pointer mobile-touch-target" onClick={() => setLightboxImage({ src: plane.image, alt: `${plane.name} ${plane.tailNumber}`, name: plane.name })}>
                <img 
                  src={plane.image} 
                  alt={`${plane.name} ${plane.tailNumber}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-1">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground animate-bounce-in hover-glow text-xs flex items-center justify-center">
                    {plane.category}
                  </Badge>
                  {plane.topRightBadges.map((badge) => (
                    <Badge 
                      key={badge} 
                      variant="destructive" 
                      className="text-xs flex items-center justify-center"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-base sm:text-lg leading-tight">{plane.name}</span>
                  <a 
                    href={`https://globe.adsbexchange.com/?find=${plane.tailNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Badge variant="default" className="font-mono text-xs sm:text-sm self-start sm:self-center hover:opacity-80 transition-opacity cursor-pointer">
                      {plane.tailNumber}
                    </Badge>
                  </a>
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
                  {plane.bottomBadges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-black/70 text-white px-4 py-2 rounded-lg inline-block">
                <h3 className="text-lg font-semibold">{lightboxImage.name}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Fleet;