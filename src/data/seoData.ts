import { LocationData, HubService, LocalReview } from '@/types';

export const locations: LocationData[] = [
  { slug: 'barry', name: 'Barry', lat: 51.4067, lng: -3.2694, keyRoute: 'A470 / A4232' },
  { slug: 'bargoed', name: 'Bargoed', lat: 51.6917, lng: -3.2289, keyRoute: 'local' },
  { slug: 'cardiff', name: 'Cardiff', lat: 51.4816, lng: -3.1791, keyRoute: 'A470' },
  { slug: 'newport', name: 'Newport', lat: 51.5880, lng: -2.9978, keyRoute: 'A467 / M4' },
  { slug: 'bridgend', name: 'Bridgend', lat: 51.5072, lng: -3.5784, keyRoute: 'M4' },
  { slug: 'pontypridd', name: 'Pontypridd', lat: 51.6022, lng: -3.3413, keyRoute: 'A470' },
  { slug: 'portishead', name: 'Portishead', lat: 51.4842, lng: -2.7667, keyRoute: 'M4 / M5' },
  { slug: 'cwmbran', name: 'Cwmbran', postcode: 'NP44', lat: 51.6522, lng: -3.0239, keyRoute: 'A467 / A4042' },
  { slug: 'penarth', name: 'Penarth', postcode: 'CF64', lat: 51.4422, lng: -3.1724, keyRoute: 'A470 / A4160' },
  { slug: 'clevedon', name: 'Clevedon', postcode: 'BS21', lat: 51.4385, lng: -2.8536, keyRoute: 'M4 / M5' },
  { slug: 'blackwood', name: 'Blackwood', postcode: 'NP12', lat: 51.6680, lng: -3.2230, keyRoute: 'A4049' },
  { slug: 'cowbridge', name: 'Cowbridge', postcode: 'CF71', lat: 51.4623, lng: -3.4475, keyRoute: 'M4 / A48' },
  { slug: 'llantwit-major', name: 'Llantwit Major', lat: 51.4079, lng: -3.4862, keyRoute: 'B4265' },
  { slug: 'pontyclun', name: 'Pontyclun', postcode: 'CF72', lat: 51.5218, lng: -3.3888, keyRoute: 'A4119' },
  { slug: 'risca', name: 'Risca', parentLocation: 'Newport', lat: 51.6094, lng: -3.1025, keyRoute: 'A467' },
  { slug: 'caerleon', name: 'Caerleon', parentLocation: 'Newport', lat: 51.6111, lng: -2.9546, keyRoute: 'M4' },
  { slug: 'weston-super-mare', name: 'Weston-super-Mare', lat: 51.3460, lng: -2.9772, keyRoute: 'M4 / M5' },
  { slug: 'caerphilly', name: 'Caerphilly', lat: 51.5794, lng: -3.2201, keyRoute: 'A469' },
  { slug: 'llantrisant', name: 'Llantrisant', postcode: 'CF72', lat: 51.5262, lng: -3.3768, keyRoute: 'A4119' },
  { slug: 'ystrad-mynach', name: 'Ystrad Mynach', postcode: 'CF82', lat: 51.6375, lng: -3.2427, keyRoute: 'A469' },
];

export const hubs: HubService[] = [
  {
    slug: 'locksmith',
    title: 'Locksmith Services',
    shortSummary: 'Residential and commercial locksmithing, door hardware repair, lock rekeying, and high-security key copying.',
    metaDescription: 'Need professional locksmith services in {location}? We offer door lock repairs, lock rekeying, standard & high-security key duplication, and custom security upgrades.',
    iconName: 'Wrench',
    microServices: [
      {
        name: 'Door lock and bolt hardware repair',
        description: 'Damaged van or commercial security? We provide expert door lock and bolt hardware repair to restore your vehicle\'s defenses rapidly. Keep your assets completely secure with professional grade deadlocks and hardware repair.',
      },
      {
        name: 'Lock rekeying',
        price: 'From £260',
        description: 'Lost or compromised keys? Our specialist lock rekeying service ensures old keys can never access your property or vehicle again. We alter internal lock cylinders and pin configurations to restore security without replacing complete lock bodies.',
      },
      {
        name: 'Standard key copying',
        price: 'From £90',
        description: 'Looking for fast standard key copying? We cut standard cylinders and basic key blanks efficiently on-site. Our mobile locksmith workshop delivers reliable, transparently priced key duplication directly to your door.',
      },
      {
        name: 'Tubular key copying',
        price: 'From £90',
        description: 'Need tubular key copying for high-security locks or van toolboxes? We precisely duplicate tubular keys using specialist cutters in our mobile unit, keeping your key assets accessible and secure.',
      },
      {
        name: 'Multi-point key copying',
        description: 'We provide precision multi-point key copying for high-security residential and commercial locks. Our fully equipped mobile locksmith cuts accurate duplicates right at your home or business premises.',
      },
    ],
    richBaseContent: `
<h2>Professional Locksmith & Door Security Services in {location}</h2>
<p>Securing your home, business, or commercial vehicle requires premium lock hardware and specialist expertise. At Ed Jones Mobile Locksmith, we deliver dealership-grade and high-security lock services directly to your doorstep in {location}. Whether your security mechanisms have suffered from wear and tear, physical vandalism, or you simply require extra key duplicates for your staff or family members, we carry the equipment and inventory to resolve your issues in a single visit.</p>

<p>Our mobile locksmith units are fully stocked with British Standard BS3621 mortice locks, TS007 anti-snap Euro cylinders, heavy-duty van deadlocks, and an array of replacement gearboxes for multi-point UPVC doors. Operating locally, we understand the specific security challenges faced by property owners in {location} {postcode} and the surrounding areas, making us the premier choice for professional, transparently priced locksmithing solutions.</p>

<h3>Door Lock and Bolt Hardware Repair</h3>
<p>Commercial doors, van lock systems, and heavy-duty sliding bolt hardware endure severe daily strain. Over time, internal springs lose tension, aligning cams slip, and locking bolts fail to engage correctly. If you have been struggling with a stubborn door or a van lock that refuses to lock smoothly, forcing the handle will eventually lead to complete mechanical failure, leaving your premises vulnerable or locking you out entirely.</p>
<p>Our comprehensive door lock and bolt hardware repair service targets the root cause of mechanical failure. We disassemble the locking housing, inspect for structural fatigue, replace worn cams and latch assemblies, and lubricate the components with high-grade teflon lubricants. For commercial vehicle doors, we reinforce weak factory latch points, install heavy-duty security plates, and restore lock alignment. Don't leave your tools or business inventory unprotected in {location}; let us repair your hardware and fortify your entry points today.</p>

<h3>Lock Rekeying: Smart Security Management</h3>
<p>When you take over a new commercial site, move into a new house, or experience a lost or stolen key incident, replacing all the lock bodies on your doors is an expensive and time-consuming operation. Fortunately, there is a more efficient solution: lock rekeying. Our professional lock rekeying service alters the internal tumbler pin configuration of your existing lock cylinders so that the original, lost keys will no longer operate the lock. We then cut new keys that match the revised pin configuration.</p>
<p>Rekeying is highly effective for master-key systems and commercial suites in {location}. It allows us to reset your entire perimeter security instantly, ensuring complete key control and preventing unauthorized entry from old, unreturned keys. We can rekey standard Euro cylinders, oval cylinders, rim cylinders, and vehicle ignition or door lock barrels right on-site from our mobile workshop.</p>

<h3>Precision Key Copying & High-Security Duplication</h3>
<p>Low-quality key duplicates cut at standard high-street kiosks often stick, bind, or refuse to turn because they are cut using worn-out machines with broad tolerances. A key that does not slide smoothly into a lock cylinder slowly damages the internal pins and wafers, eventually causing the entire cylinder to lock up. We prevent this by providing precision key copying on-site using state-of-the-art computer-controlled key cutters calibrated to factory specifications.</p>
<p>Our mobile key copying services in {location} cover a vast range of key profiles:</p>
<ul>
  <li><strong>Standard Key Copying:</strong> Rapid duplication of residential cylinder keys (Yale-style), traditional mortice gate keys, and window locks.</li>
  <li><strong>Tubular Key Copying:</strong> Specialized duplicate keys for tubular padlock systems, motorcycle disc locks, and heavy-duty tool chest locks, cut using dedicated rotary cutters.</li>
  <li><strong>Multi-point Key Copying:</strong> High-security dimple keys, laser-cut track keys, and restricted key profiles that require card-authorization. We test every single duplicate key directly in your lock to guarantee flawless operation before leaving your site.</li>
</ul>

<h3>Enhanced Commercial Security & Peace of Mind</h3>
<p>Beyond emergency repairs and quick duplicate keys, we help businesses and residential clients in {location} map out comprehensive physical security frameworks. We carry out detailed security audits, analyzing entry points, window locking structures, and perimeter gates to identify weak links. By combining robust British Standard deadbolts with professional installation, we ensure your property remains compliant with all standard insurance policies while putting up an aggressive defense against intruders.</p>
    `,
  },
  {
    slug: 'auto-locksmith',
    title: 'Auto Locksmith Services',
    shortSummary: 'Mobile auto locksmith services including transponder key programming, key cloning, new key fobs, and damage-free vehicle entry.',
    metaDescription: 'Locked out of your vehicle? Need a spare car key? Ed Jones Mobile Auto Locksmith provides rapid key copying, fob programming, and car entry in {location}.',
    iconName: 'Car',
    microServices: [
      {
        name: 'Car key copying',
        price: 'From £120',
        description: 'Lost your spare vehicle key? Our fast mobile car key copying service provides precision-cut duplicates for any vehicle make or model. We clone transponder chips and cut blades right at your location.',
      },
      {
        name: 'Coded key copying',
        price: 'From £180',
        description: 'Require coded key copying? We offer specialist transponder and immobiliser key duplication directly at your location. Enjoy main-dealer level coding at a fraction of the cost.',
      },
      {
        name: 'New key fob creation',
        price: 'From £180',
        description: 'Need a replacement remote? Our mobile auto locksmith specializes in new key fob creation and programming for all vehicle makes. We bring diagnostic tools directly to your driveway.',
      },
      {
        name: 'Car digital and remote key reprogramming',
        price: 'From £180',
        description: 'Need car digital and remote key reprogramming? We securely sync remotes, update proximity keys, and wipe old keys from your vehicle\'s ECU to protect against theft.',
      },
      {
        name: 'Tubular key copying',
        price: 'From £90',
        description: 'Need tubular key copying for specialty vehicle locks or toolboxes? We duplicate tubular auto keys using precision mobile cutters.',
      },
      {
        name: 'Standard key copying',
        price: 'From £90',
        description: 'We cut non-remote standard car and van key blanks efficiently on-site, providing a cost-effective emergency backup key.',
      },
    ],
    richBaseContent: `
<h2>Expert Mobile Auto Locksmith in {location}</h2>
<p>Losing your vehicle keys or having a remote key fob fail can instantly disrupt your plans. Towing your car to a main dealership in {location} often results in astronomical transport fees, long delays while replacement keys are ordered from overseas, and premium programming rates. Ed Jones Mobile Auto Locksmith bypasses the dealership markup entirely by bringing advanced diagnostic technology and fully equipped mobile workshops directly to your driveway or roadside location in {location} {postcode}.</p>

<p>We work with a wide range of vehicle makes and models—including Ford, Vauxhall, Volkswagen, Peugeot, Renault, Nissan, and Audi. As certified auto locksmith specialists, we handle everything from duplicating basic physical backup keys to programming complex proximity smart keys and transponders on the spot.</p>

<h3>Precision Car Key Copying & Duplicate Services</h3>
<p>Having a spare car key is the single best insurance policy against a costly emergency lockout situation. Our car key copying service provides you with a fully functional spare key in under 30 minutes. We don't just copy the physical cuts on the metal blade; we also duplicate the digital signature stored in the key's transponder chip. When we cut a vehicle key on our computerized equipment, we test the blade in your door locks and ignition barrel to ensure smooth mechanical rotation, preventing long-term cylinder wear.</p>

<h3>Coded Key Copying & Immobiliser Synchronization</h3>
<p>Modern vehicles built after 1995 feature an electronic immobiliser system. Inside the plastic head of your car key is a microscopic transponder chip (such as a Megamos, Texas Instruments, or NXP chip). When you turn the key in the ignition, the immobiliser coil reads the digital security code from the transponder. If the code matches the value stored in the engine control module, the car starts. If the code is missing or incorrect, the engine will crank but refuse to run.</p>
<p>Our coded key copying service uses specialist transponder programmers to read the EEPROM data from your original key and clone it onto a brand-new carbon chip. If your vehicle uses an advanced rolling-code system, we connect our diagnostic equipment directly to your vehicle's OBD-II port, extract the secure PIN code, and write the code directly into the vehicle's memory. This dealer-level coding ensures your new key integrates perfectly with your car\'s immobiliser system.</p>

<h3>New Key Fob Creation & Remote Reprogramming</h3>
<p>Is your central locking remote cracked, water-damaged, or failing to lock the doors? We specialize in new key fob creation and remote programming. Our vans are stocked with high-quality OEM and aftermarket remote key fobs for a vast range of commercial vans and passenger cars. We cut the emergency physical blade, extract your car's security PIN, and sync the remote fob to your vehicle's central locking receiver using advanced handheld tablets.</p>
<p>Additionally, if you have recently purchased a second-hand vehicle in {location} or lost a set of keys, we can perform a complete remote key reprogramming session. We will access the vehicle's ECU and wipe all previously programmed keys from the system. This means that even if someone finds your lost key, it will be completely useless and unable to start or unlock your car, ensuring absolute security for your vehicle.</p>

<h3>Standard and Specialty Key Duplication</h3>
<p>For budget-conscious drivers or classic car owners, we provide standard key copying services. These keys do not feature buttons but contain the necessary transponder chip to unlock the doors and start the vehicle, serving as a reliable emergency backup key. We also provide tubular key copying for specialty locks, such as steering wheel locks, van toolboxes, roof racks, and motorcycle locks. Our precision machinery guarantees a perfect duplicate on the first cut.</p>
    `,
  },
  {
    slug: 'emergency-locksmith',
    title: 'Emergency Locksmith Services',
    shortSummary: '24/7 emergency lockouts, non-destructive vehicle entry, rapid 30-minute response times, and emergency lock changes.',
    metaDescription: 'Locked out in {location}? Our 24/7 emergency auto locksmith team provides rapid, damage-free vehicle entry and emergency lock rekeying within 30 minutes.',
    iconName: 'Unlock',
    microServices: [
      {
        name: 'Car lockouts',
        price: 'From £90',
        description: 'Facing frustrating car lockouts? Our rapid auto locksmith team guarantees 30-minute, damage-free emergency vehicle entry. We unlock cars safely without damage to paint or seals.',
      },
      {
        name: 'Emergency Vehicle Entry',
        price: 'From £90',
        description: 'Locked out of your car? Our expert auto locksmith provides rapid 30-minute emergency vehicle entry. We guarantee damage-free access for all makes and models.',
      },
      {
        name: '24/7 Auto Lockout Service',
        description: 'Stranded late at night? Our 24/7 auto lockout service provides a rapid 30-minute response time. We ensure quick, completely damage-free entry for commercial and personal vehicles.',
      },
      {
        name: 'Lock rekeying (Emergency)',
        price: 'From £260',
        description: 'Stolen keys? We respond immediately with emergency auto lock rekeying, altering lock cylinders and recoding transponders on-site so stolen keys are instantly disabled.',
      },
    ],
    richBaseContent: `
<h2>24/7 Emergency Locksmith & Auto Lockout Services in {location}</h2>
<p>Nothing is more stressful than locking your keys inside your vehicle, losing them late at night, or having a door lock fail when you are miles away from home. In these emergency situations, you need a locksmith who is local, responsive, and equipped to handle the task on-site. Ed Jones Mobile Locksmith provides rapid 24/7 emergency vehicle entry and lockout assistance across {location} {postcode}. We operate with a guaranteed 30-minute response time, getting you safely back on the road without delay.</p>

<p>We understand that emergency lockouts don\'t just happen during standard business hours. Whether you are locked out of your van at a building site early in the morning or stranded in a supermarket car park at 2 AM, our mobile workshop is always prepped and ready to deploy. We bring all the necessary tools, replacement lock bodies, key blanks, and transponders to resolve your emergency immediately.</p>

<h3>Damage-Free Emergency Vehicle Entry</h3>
<p>When you are locked out of your car, it can be tempting to try and bypass the lock yourself using a coat hanger, wedge, or by breaking a window. These DIY methods are highly discouraged; they inevitably cause severe damage to the window regulators, bend the door frame, scratch the paint, and result in hundreds of pounds in secondary repairs. Modern vehicle locking systems are designed to resist physical manipulation, meaning amateur entry methods rarely work.</p>
<p>Our certified emergency locksmiths use advanced non-destructive vehicle entry techniques. We employ specialized Lishi pick decoders designed for your specific vehicle make. These precision tools allow us to feel the position of individual lock wafers and pick the cylinder mechanically, turning the lock exactly as the original key would. We guarantee 100% damage-free entry for all vehicle makes and models, keeping your door seals, paint, and windows completely intact.</p>

<h3>24/7 Auto Lockout Service: Rapid Roadside Dispatch</h3>
<p>Whether it\'s a passenger car, a commercial delivery van, or a heavy-duty transport truck, lock issues can halt your business operations or travel plans instantly. Our 24/7 auto lockout service is designed around speed and efficiency. When you call our emergency hotline, you speak directly to a qualified auto locksmith, not a distant call center. We assess your vehicle details, confirm your exact location in {location}, and immediately dispatch a mobile workshop to your coordinates.</p>
<p>Our vans are fitted with advanced navigation tracking systems, allowing us to find the fastest routes around {location} to bypass heavy traffic and arrive within our 30-minute window. We work efficiently, decoding your door lock cylinder, extracting keys locked in the boot, or cutting a new emergency key on-site if your key has snapped inside the lock cylinder.</p>

<h3>Emergency Rekeying & Immediate Security Restore</h3>
<p>If your car keys have been stolen, securing your vehicle is an absolute emergency. The thief knows what vehicle the key belongs to, and your car is at immediate risk of theft. Our emergency lock rekeying and transponder erasing service solves this crisis on-the-spot. We alter the physical ignition cylinder and door lock barrels so the stolen key will no longer turn in the lock. Simultaneously, we connect to your vehicle's OBD port and wipe the stolen key's transponder signature from the ECU. Your vehicle is instantly secured, and we program a new, unique key for your exclusive use.</p>
    `,
  },
  {
    slug: 'car-security',
    title: 'Car Security System Installer',
    shortSummary: 'Premium Pandora alarm installation, heavy-duty commercial van locks, deadlocks, slam locks, and electronic fleet security upgrades.',
    metaDescription: 'Upgrade your vehicle security in {location}. We specialize in professional Pandora alarm installations, commercial van deadlocks, slam locks, and keyless theft defense.',
    iconName: 'Shield',
    microServices: [
      {
        name: 'Pandora Alarm Installation',
        price: 'From £550',
        description: 'Upgrade your vehicle\'s defense with premium Pandora alarm installation. As dedicated security system installers, we protect vans and cars from modern relay theft and key cloning.',
      },
      {
        name: 'Commercial Van Security Locks',
        price: 'From £380',
        description: 'Protect your livelihood with high-end commercial van security locks. We fit heavy-duty deadlocks, hook locks, and slam locks for tradesmen. Protect your tools against modern theft.',
      },
      {
        name: 'Electronic lock installation',
        price: 'From £550',
        description: 'Upgrade your commercial fleet with advanced electronic lock installation. We fit premium central locking upgrades, tracking systems, and secure keyless access controls.',
      },
    ],
    richBaseContent: `
<h2>Professional Car Security System Installer in {location}</h2>
<p>Vehicle theft has evolved. Modern thieves no longer rely on breaking windows or hotwiring ignition cables; instead, they use digital relay amplifiers, OBD port key programmers, and signal blockers to steal vehicles in under 60 seconds without key access. If you drive a high-value car or a commercial van filled with expensive tools and equipment in {location} {postcode}, factory security systems are no longer sufficient to protect your assets. You need aftermarket car security solutions fitted by an expert car security system installer.</p>

<p>Ed Jones Mobile Locksmith specializes in upgrading vehicle security systems across {location} and the wider South Wales region. We analyze your vehicle\'s specific vulnerabilities and install physical and electronic barriers that aggressively deter, delay, and defeat modern theft techniques.</p>

<h3>Premium Pandora Alarm Installation: Elite Keyless Defense</h3>
<p>Pandora car alarms represent the absolute pinnacle of modern vehicle security. These advanced telemetry systems protect against key cloning, OBD bypass, signal hacking, and keyless relay theft. A Pandora system works by requiring a secure Bluetooth driver tag to be in close proximity to the vehicle before the engine can start. Even if a thief intercepts your factory key fob signal or programs a new key through the OBD port, the immobiliser remains engaged without the Pandora driver tag.</p>
<p>Our certified Pandora alarm installation service includes fitting dual-zone shock, tilt, and motion sensors, engine block relays, and smart GPS tracking units. The system integrates seamlessly with your smartphone, sending instant push notifications if your vehicle is bumped, towed, or if a door is opened. Keep your high-performance vehicle or commercial van completely secure in {location} with our professional installation.</p>

<h3>Commercial Van Security Locks: Protecting Tradesmen\'s Tools</h3>
<p>Van break-ins are a major threat to local tradesmen in {location}. Thieves target vans using techniques like "peel and steal" (bending the top of the side door down) or by cutting holes to access the locking cables. Replacing stolen tools can cost thousands of pounds, not to mention the lost work and insurance increases. We offer heavy-duty commercial van security locks to fortify your van doors:</p>
<ul>
  <li><strong>Van Deadlocks:</strong> Brass cylinders that shoot a heavy-duty bolt into a reinforced strike housing on the door frame, operated manually by a high-security key. We install these high on the door to combat peel-and-steal attacks.</li>
  <li><strong>Van Hook Locks:</strong> Advanced deadlocks where a hooked bolt hooks into the frame, providing immense resistance against crowbar attacks and door spreading.</li>
  <li><strong>Van Slam Locks:</strong> Ideal for delivery drivers, these locks automatically lock the door the moment it is slammed shut, ensuring the vehicle is never left unlocked during quick drop-offs.</li>
</ul>

<h3>Advanced Electronic Lock Installation & Central Locking Upgrades</h3>
<p>In addition to alarms and mechanical locks, we provide advanced electronic lock installation services. If you operate an older commercial vehicle or utility van without central locking, we can install custom actuator systems to lock all doors with a single remote press. We also install electronic cabin partitioning locks, smart deadbolts that integrate with GPS tracking systems, and secure immobiliser relays. Ensure your fleet is fully protected in {location} by choosing an experienced security installer.</p>
    `,
  },
  {
    slug: 'ecu-programming',
    title: 'ECU Module Coding & Unit Cloning',
    shortSummary: 'Specialist ECU cloning, transponder coding, module replacement programming, and vehicle key remapping services.',
    metaDescription: 'Need professional ECU module coding or cloning in {location}? Our mobile auto locksmith provides advanced unit programming, vehicle key remapping, and diagnostics.',
    iconName: 'Cpu',
    microServices: [
      {
        name: 'ECU Module Coding & Unit Cloning',
        price: 'From £220',
        description: 'Professional ECU module coding and unit cloning services. We extract software, vin, and immobiliser data from damaged modules and transfer them to replacement units.',
      },
      {
        name: 'Vehicle Key Remapping',
        price: 'From £180',
        description: 'Experience flawless vehicle key remapping. We program new transponders and securely wipe lost or stolen keys from your immobiliser module using main-dealer tools.',
      },
      {
        name: 'Car digital and remote key reprogramming',
        price: 'From £180',
        description: 'We offer dealer-level diagnostic reprogramming for digital and remote key fobs, ensuring seamless integration with your engine management system.',
      },
    ],
    richBaseContent: `
<h2>Specialist ECU Module Coding & Unit Cloning in {location}</h2>
<p>Modern vehicles are computers on wheels. Every action—from injecting fuel to unlocking the boot—is managed by a dedicated Electronic Control Unit (ECU). When one of these electronic modules suffers a hardware fault, water ingress, or internal component failure, the vehicle will often enter a "limp mode," display complex dashboard warning lights, or refuse to crank entirely. Finding a solution through a main dealer in {location} {postcode} usually requires buying a brand-new, unprogrammed ECU at a cost of thousands of pounds, followed by high labor fees for software matching.</p>

<p>Ed Jones Mobile Locksmith offers a highly cost-effective alternative. We provide advanced ECU module coding and unit cloning services using specialized EEPROM programmers and diagnostic bench setups. We cover {location} and the surrounding areas, delivering main-dealer level software engineering right to your home or workshop.</p>

<h3>ECU & Module Cloning: Plug-and-Play Diagnostics</h3>
<p>If your engine control unit, body control module (BCM), or electronic ignition switch (EIS) has failed, you do not have to buy a brand new unit. We can often source a matching, used donor module and clone the data from your original unit onto it. This is done by reading the microcontrollers and flash memory chips containing the vehicle\'s unique configuration:</p>
<ul>
  <li><strong>Vehicle Identification Number (VIN) Matching:</strong> Ensuring the replacement module displays the correct VIN to pass inspection and communicate with other modules.</li>
  <li><strong>Immobiliser Security Data Transfer:</strong> Cloning the secure rolling-code keys and security alignment parameters, making the donor module plug-and-play without needing extra key matching.</li>
  <li><strong>Software Mapping Transfer:</strong> Copying the engine maps and manufacturer configuration settings exactly as they were in the original ECU, saving you from having to recalibrate the system.</li>
</ul>

<h3>Vehicle Key Remapping & Immobiliser Alignment</h3>
<p>If you have had your car keys replaced, or if your vehicle\'s engine control unit has lost synchronization with the immobiliser receiver (a common problem on many French and German makes), your vehicle will crank but fail to start. Our vehicle key remapping service restores communication between these components. We use advanced diagnostic scanners to check the immobiliser status, read the transponder IDs, and remap the transponder signatures back into the ECU memory.</p>
<p>Our key remapping and coding process is safe, non-destructive, and conforms entirely to manufacturer protocols. We also offer key remapping for proximity and push-to-start keys, ensuring the vehicle recognizes the keyless fob inside the cabin and allows the start button to function seamlessly. For all module coding and key programming in {location}, rely on our mobile technician.</p>

<h3>OBD-II Port Diagnostics & Troubleshooting</h3>
<p>Before any coding or cloning takes place, our mobile unit performs a deep diagnostic scan of your vehicle\'s electrical network. We read the diagnostic trouble codes (DTCs), check live data streams, and verify module communications across the CAN-Bus network. This ensures we identify the exact module that is failing and rule out simple issues like a blown fuse, damaged wiring harness, or low battery voltage, saving you time and diagnostic fees.</p>
    `,
  },
];

export const localReviews: LocalReview[] = [
  {
    name: 'Sean Brain',
    role: 'Driver in Cardiff',
    quote: 'Fantastic service. Called on a Saturday at 8:30am and Ed arrived within the hour. Had my keys out of the car in under 10 minutes. Friendly, quick, and far cheaper than the other quotes I had. Highly recommended. Many thanks!',
    location: 'Cardiff',
  },
  {
    name: 'James Davies',
    role: 'Driver in Cardiff',
    quote: 'What a fantastic service. Called out after someone attempted to steal my car. Arrived within 30 minutes and was able to restore my keys to the car so that I could move it and secure the car. Very professional and amazing service would highly recommend.',
    location: 'Cardiff',
  },
  {
    name: 'Amy P',
    role: 'Cardiff Business Owner',
    quote: 'Brilliant service from Ed. He diverted from going home at the end of his day to help us when we were stuck. Two recovery services tried and failed but Ed was able to get us moving again. I would 100% recommend Ed, his prices are very reasonable!',
    location: 'Cardiff',
  },
  {
    name: 'Gareth Thomas',
    role: 'Trade Professional',
    quote: 'Called Ed for van deadlock installation in Bargoed. He arrived right on time, did a very clean job on the doors, and the locks feel incredibly secure. Top-tier service for local tradesmen!',
    location: 'Bargoed',
  },
  {
    name: 'David Jenkins',
    role: 'Vehicle Owner in Newport',
    quote: 'Locked my keys in the boot of my BMW. Ed was in Newport and came out in 20 minutes. Opened the car completely damage-free with a Lishi pick. Excellent price, fast response. Highly recommended!',
    location: 'Newport',
  },
  {
    name: 'Sarah Lewis',
    role: 'Driver in Barry',
    quote: 'Lost my car keys in Barry. Ed cut and programmed a brand-new transponder remote key on my driveway. Saved me a fortune compared to dealership quotes. Genuine, fast, and helpful.',
    location: 'Barry',
  },
  {
    name: 'Mark Owens',
    role: 'Van Fleet Manager in Bridgend',
    quote: 'Had a van that needed new lock cylinders and ECU module cloning after water damage. Ed sorted it all out on-site in Bridgend. Incredible tech skills and highly professional auto locksmith.',
    location: 'Bridgend',
  },
  {
    name: 'Rhys Davies',
    role: 'Resident in Pontypridd',
    quote: 'Fast and reliable 24/7 service. Ed helped us rekey our locks after losing a set of keys in Pontypridd. Very tidy and professional.',
    location: 'Pontypridd',
  },
  {
    name: 'Chloe Evans',
    role: 'Vehicle Owner in Caerphilly',
    quote: 'Excellent Pandora alarm installation. Ed took the time to show me how the app and Bluetooth tags work. Feel much safer parking my car in Caerphilly now!',
    location: 'Caerphilly',
  },
];
