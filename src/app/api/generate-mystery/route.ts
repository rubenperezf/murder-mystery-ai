import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const mysteryTemplates = {
  en: [
  {
    setting: "Victorian Manor",
    victim: "Lady Margaret Blackwood",
    story: `The grand Victorian manor of Blackwood Estate fell under an ominous shadow when Lady Margaret Blackwood was discovered lifeless in her private study at 11:47 PM. The autumn storm raged outside, lightning illuminating the stained glass windows as Inspector Crawford began his meticulous examination of the crime scene.

Three individuals had been present that evening, each harboring secrets and motives. Professor James Hartford, the distinguished archaeologist, had arrived that morning to examine Lady Margaret's collection of ancient Roman artifacts. His weathered hands bore fresh scratches, which he claimed came from handling rough pottery shards earlier in the day. Miss Elena Rosetti, the newly hired Italian governess, possessed an intimate knowledge of poisons from her previous work in her family's apothecary shop in Florence. Charles Blackwood, Margaret's ambitious nephew and heir apparent, had been seen arguing with his aunt about his mounting gambling debts just hours before her death.

The crime scene revealed a complex web of evidence. In the study, Inspector Crawford found Lady Margaret slumped over her mahogany desk, a half-finished letter clutched in her hand warning someone about "fraudulent artifacts" and threatening to "expose the truth to the authorities." A crystal decanter containing her evening port sat nearby, its contents tainted with traces of oleander extract - a deadly poison that Miss Rosetti would know well from her botanical studies.

However, the most telling clue lay in the victim's appointment calendar, which showed a private meeting scheduled with "J.H." at 11:30 PM - precisely Professor Hartford's initials and close to the time of death. The Professor's archaeological tools were found hastily cleaned and returned to his travel case, though traces of blood remained on his metal excavation pick.

Charles's gambling markers were discovered hidden in Lady Margaret's desk drawer, suggesting she had been paying his debts. But more damning was the muddy boot print by the study window - a print that perfectly matched Charles's riding boots, indicating he had entered from outside during the storm to avoid being seen by the household staff.

The victim's final meal showed she had dined alone, dismissing the servants early - unusual behavior that suggested she was expecting someone she trusted. Miss Rosetti claimed to have been reading to young Sarah upstairs all evening, but the child later mentioned that "Miss Elena went away for a long time" after putting her to bed.

Physical evidence painted a clearer picture: defensive wounds on Lady Margaret's hands suggested a struggle, and her emerald ring was found beneath the Persian rug, as if knocked off during a violent encounter. The French doors to the garden showed fresh scratches around the lock, and wet footprints led directly to the study.

Most revealing was a torn piece of expensive paper found in the fireplace - partially burned correspondence that mentioned "archaeological forgeries" and bore the letterhead of a prestigious London auction house, suggesting someone had been selling counterfeit artifacts from Lady Margaret's collection.`,
    suspects: ["Professor James Hartford", "Miss Elena Rosetti", "Charles Blackwood"],
    weapons: ["Poison Extract", "Archaeological Pick", "Blunt Object"],
    locations: ["Study", "Garden", "Library"],
    solution: {
      suspect: "Professor James Hartford",
      weapon: "Archaeological Pick",
      location: "Study",
      explanation: "Professor Hartford killed Lady Margaret with his archaeological pick in the study. The evidence points to him: the appointment at 11:30 PM with 'J.H.', the hastily cleaned tools with blood traces, his scratched hands, and the burned correspondence about archaeological forgeries. Margaret had discovered he was selling fake artifacts from her collection and threatened to expose him, ending his career and reputation."
    }
  },
  {
    setting: "Modern Art Gallery",
    victim: "Alexandra Pierce", 
    story: `The prestigious Meridian Art Gallery's opening night celebration turned from triumph to tragedy when renowned art critic Alexandra Pierce was discovered dead at 10:45 PM in the sculpture wing. Detective Morgan arrived to find the victim surrounded by towering abstract sculptures, the city lights casting eerie shadows through the floor-to-ceiling windows.

The gallery had been buzzing with over two hundred guests, but three individuals stood out due to their complex relationships with the deceased. David Chen, a struggling sculptor whose latest exhibition had been savagely destroyed by Pierce's scathing review just two weeks prior, had been seen drinking heavily at the wine bar. His hands were stained with clay and traces of metal polish - evidence of his frantic last-minute work on a sculpture he'd hoped would redeem his reputation. Isabella Santos, the gallery's ambitious curator, wore an elegant black dress with suspicious white powder residue on the cuffs - powder that would later be identified as potassium cyanide. Marcus Reid, Pierce's former business partner, had been nervously checking his watch all evening and was overheard making hushed phone calls about "finalizing the deal tonight."

The crime scene told a compelling story. Pierce lay beside her signature champagne glass, its contents laced with a fast-acting poison that produced the telltale scent of bitter almonds. Her phone displayed an unsent message that read: "Isabella, I know what you've been doing with the provenance documents. Meet me in the sculpture wing at 10:30." 

Security footage revealed crucial timeline evidence: at 10:15 PM, Isabella was seen entering the sculpture wing carrying a champagne bottle, claiming later she was "refreshing the displays for VIP guests." However, the bottle she carried contained vintage Dom Pérignon - Pierce's well-known preference, which Isabella would certainly know from years of working together.

The victim's notebook contained damning evidence about fraudulent authentication certificates for several major pieces in the gallery's permanent collection. Pierce had discovered that Isabella had been forging provenance documents to increase the value of questionable artworks, potentially defrauding collectors of millions.

David's alibi seemed solid initially - multiple witnesses saw him at the wine bar until 10:40 PM, just five minutes before the body was discovered. His sculpture tools were examined but showed no traces of poison or blood. Marcus Reid's phone records confirmed his calls were to legitimate art dealers in London, and his departure from the gallery was captured on external security cameras at 9:55 PM.

The most compelling evidence came from the victim's own meticulous documentation. Pierce had photographed several artworks with her phone that evening, including close-ups of forged signatures and authentication stamps. The timestamps on these photos ranged from 8:30 PM to 10:25 PM - just before she sent the fatal message to Isabella.

Additional evidence included Isabella's financial records, which showed significant deposits from offshore accounts linked to questionable art sales, and a hidden safe in her office containing blank authentication certificates and specialized chemical equipment for aging documents.`,
    suspects: ["David Chen", "Isabella Santos", "Marcus Reid"],
    weapons: ["Poisoned Champagne", "Sculptor's Tool", "Chemical Spray"],  
    locations: ["Sculpture Wing", "Wine Bar", "Curator's Office"],
    solution: {
      suspect: "Isabella Santos",
      weapon: "Poisoned Champagne",
      location: "Sculpture Wing", 
      explanation: "Isabella Santos poisoned Alexandra Pierce with cyanide-laced champagne in the sculpture wing. The evidence is overwhelming: Pierce's unsent message exposing Isabella's forgeries, the security footage showing Isabella carrying champagne to the sculpture wing, the white powder residue on Isabella's dress cuffs, and Pierce's documented evidence of the fraudulent authentication scheme. Isabella killed Pierce to protect her multi-million dollar art fraud operation."
    }
  },
  {
    setting: "Mountain Lodge",
    victim: "Dr. Robert Sterling",
    story: `The remote Alpine Lodge transformed from a peaceful research retreat into a crime scene when Dr. Robert Sterling, a prominent wildlife researcher, was found dead at 3:20 AM in the lodge's main cabin. The blizzard had intensified overnight, creating a perfect isolated environment as Sheriff Williams began her investigation by lamplight, the power having failed hours earlier.

Three colleagues had joined Sterling for what was supposed to be a collaborative weekend retreat. Dr. Sarah Mitchell, Sterling's former research partner, had been working late into the night on her laptop, her fingers stained with ink from handwritten notes about "data discrepancies" and "falsified research claims." Her background in biochemistry had given her extensive knowledge of various compounds and their effects on the human nervous system. Tom Bradley, an experienced hunting guide and conservationist, had been drinking heavily that evening, his hunting rifle leaning against the wall of his room - though notably, his prized hunting knife was missing from its custom leather sheath. Dr. Lisa Park, a veterinarian specializing in large mammals, had arrived with a medical bag containing various veterinary sedatives and had been seen earlier treating a wounded deer near the lodge's perimeter.

The victim was discovered slumped in his leather chair before the dying fireplace, his laptop open to a damning document titled "Research Fraud Evidence - S.M." The document contained detailed proof that Sarah had fabricated critical data in her wolf behavior studies, research that had won her a prestigious grant and academic position. Screenshots of altered spreadsheets and falsified field observations were meticulously documented.

Physical evidence painted a complex picture. An empty vial labeled "Ketamine HCl" was found beneath Sterling's chair - a powerful anesthetic that Dr. Park would have legitimate access to for veterinary procedures. However, the vial bore Sarah's fingerprints, not Park's, suggesting either direct involvement or deliberate framing. The victim's coffee mug contained traces of the same substance, indicating the drug had been administered orally.

Tom Bradley's hunting knife was eventually discovered outside, buried in fresh snow near the generator shed - the same location where someone had deliberately sabotaged the power supply to create darkness and confusion. The blade was clean, but the handle bore microscopic fibers from Sarah's wool sweater.

Sterling's phone revealed the most damning evidence: at 11:47 PM, he had sent a message to the university ethics board reading "Compelling evidence of research misconduct by Dr. S. Mitchell. Will submit full report Monday morning with documentation." The message timestamp was crucial - witnesses confirmed all three suspects were accounted for at that time, but Sarah had excused herself to "get more coffee" shortly after.

The investigation revealed Sarah's motive went beyond career preservation. Sterling's evidence would not only destroy her reputation but also trigger criminal fraud charges, as her falsified research had influenced federal wildlife protection policies. Security camera footage from the lodge's entrance showed Sarah leaving her room at 2:55 AM - just twenty-five minutes before Sterling's estimated time of death.

Most tellingly, Sarah's laptop browser history showed desperate late-night searches for "ketamine overdose symptoms" and "untraceable administration methods" conducted just hours before the murder. Her notebook contained calculations for lethal dosages based on Sterling's approximate weight and age.`,
    suspects: ["Dr. Sarah Mitchell", "Tom Bradley", "Dr. Lisa Park"],
    weapons: ["Veterinary Sedative", "Hunting Knife", "Toxic Compound"],
    locations: ["Main Cabin", "Generator Shed", "Outside Lodge"],
    solution: {
      suspect: "Dr. Sarah Mitchell", 
      weapon: "Veterinary Sedative",
      location: "Main Cabin",
      explanation: "Dr. Sarah Mitchell killed Dr. Sterling with veterinary ketamine in the main cabin. The evidence is conclusive: Sterling's laptop contained her research fraud documentation, her fingerprints on the ketamine vial, the message to ethics board at 11:47 PM, her late-night internet searches about ketamine overdoses, security footage showing her leaving her room at 2:55 AM, and fibers from her sweater on the planted knife. She murdered Sterling to prevent him from exposing her career-ending research fraud."
    }
  }
  ],
  es: [
    {
      setting: "Mansión Victoriana",
      victim: "Lady Margarita Valdés",
      story: `La gran mansión victoriana de la hacienda Valdés se sumió en una sombra ominosa cuando Lady Margarita Valdés fue descubierta sin vida en su estudio privado a las 11:47 PM. La tormenta otoñal arreciaba afuera, los relámpagos iluminando las ventanas emplomadas mientras el Inspector García comenzaba su meticuloso examen de la escena del crimen.

Tres individuos habían estado presentes esa noche, cada uno albergando secretos y motivos. El Profesor Andrés Herrera, el distinguido arqueólogo, había llegado esa mañana para examinar la colección de artefactos romanos antiguos de Lady Margarita. Sus manos curtidas mostraban rasguños frescos, que él afirmaba provenían de manipular fragmentos de cerámica rugosa más temprano en el día. La Señorita Carmen Silva, la institutriz italiana recién contratada, poseía un conocimiento íntimo de venenos por su trabajo previo en la farmacia de su familia en Florencia. Carlos Valdés, el ambicioso sobrino de Margarita y heredero aparente, había sido visto discutiendo con su tía sobre sus crecientes deudas de juego apenas unas horas antes de su muerte.

La escena del crimen reveló una compleja red de evidencia. En el estudio, el Inspector García encontró a Lady Margarita desplomada sobre su escritorio de caoba, una carta a medio terminar apretada en su mano advirtiendo a alguien sobre "artefactos fraudulentos" y amenazando con "exponer la verdad a las autoridades." Una licorera de cristal conteniendo su oporto nocturno yacía cerca, su contenido contaminado con trazas de extracto de adelfa - un veneno mortal que la Señorita Silva conocería bien de sus estudios botánicos.

Sin embargo, la pista más reveladora yacía en el calendario de citas de la víctima, que mostraba una reunión privada programada con "A.H." a las 11:30 PM - precisamente las iniciales del Profesor Herrera y cercano al momento de la muerte. Las herramientas arqueológicas del Profesor fueron encontradas limpiadas apresuradamente y devueltas a su maletín de viaje, aunque quedaron rastros de sangre en su pico de excavación metálico.

Los resguardos de juego de Carlos fueron descubiertos escondidos en el cajón del escritorio de Lady Margarita, sugiriendo que ella había estado pagando sus deudas. Pero más condenatorio era la huella de bota lodosa junto a la ventana del estudio - una huella que coincidía perfectamente con las botas de montar de Carlos, indicando que había entrado desde afuera durante la tormenta para evitar ser visto por el personal de la casa.

La última comida de la víctima mostró que había cenado sola, despidiendo a los sirvientes temprano - comportamiento inusual que sugería que estaba esperando a alguien en quien confiaba. La Señorita Silva afirmó haber estado leyendo a la pequeña Sarah arriba toda la noche, pero la niña después mencionó que "Señorita Carmen se fue por mucho tiempo" después de acostarla.

La evidencia física pintaba un cuadro más claro: heridas defensivas en las manos de Lady Margarita sugerían una lucha, y su anillo de esmeralda fue encontrado bajo la alfombra persa, como si hubiera sido arrancado durante un encuentro violento. Las puertas francesas al jardín mostraban rasguños frescos alrededor de la cerradura, y huellas húmedas conducían directamente al estudio.

La más reveladora fue una pieza de papel caro desgarrada encontrada en la chimenea - correspondencia parcialmente quemada que mencionaba "falsificaciones arqueológicas" y portaba el membrete de una prestigiosa casa de subastas de Londres, sugiriendo que alguien había estado vendiendo artefactos falsificados de la colección de Lady Margarita.`,
      suspects: ["Profesor Andrés Herrera", "Señorita Carmen Silva", "Carlos Valdés"],
      weapons: ["Extracto Venenoso", "Pico Arqueológico", "Objeto Contundente"],
      locations: ["Estudio", "Jardín", "Biblioteca"],
      solution: {
        suspect: "Profesor Andrés Herrera",
        weapon: "Pico Arqueológico",
        location: "Estudio",
        explanation: "El Profesor Herrera mató a Lady Margarita con su pico arqueológico en el estudio. La evidencia lo señala: la cita a las 11:30 PM con 'A.H.', las herramientas limpiadas apresuradamente con rastros de sangre, sus manos rasguñadas, y la correspondencia quemada sobre falsificaciones arqueológicas. Margarita había descubierto que él estaba vendiendo artefactos falsos de su colección y amenazó con exponerlo, terminando su carrera y reputación."
      }
    },
    {
      setting: "Galería de Arte Moderna",
      victim: "Alejandra Morales",
      story: `La prestigiosa Galería de Arte Meridiano se convirtió en escena de tragedia durante la celebración de inauguración cuando la reconocida crítica de arte Alejandra Morales fue encontrada muerta en el ala de esculturas. Las luces de la ciudad parpadeaban a través de las ventanas del piso al techo mientras la Detective López examinaba la escena, desconcertada por la evidencia inusual.

Tres individuos tuvieron interacciones significativas con Morales esa noche: Diego Ruiz, un artista en apuros cuyo trabajo había sido duramente criticado por Morales el mes pasado; Isabella Santos, la ambiciosa curadora de la galería que había estado en disputa con Morales sobre las elecciones de exposición; y Miguel Torres, el ex socio comercial de Morales que había estado envuelto en una amarga demanda por atribuciones de obras de arte robadas.

Varios elementos sospechosos llamaron la atención de la detective: una copa de vino que contenía trazas de una toxina de acción rápida yacía abandonada cerca de la instalación de arte moderno. Un cincel de escultor afilado había desaparecido del espacio de trabajo del artista. Las cámaras de seguridad mostraron que alguien había manipulado la salida de emergencia en el ala este. El teléfono de la víctima contenía un mensaje de amenaza recibido pocas horas antes de su muerte.

Diego fue escuchado discutiendo con Morales cerca del bar de vinos alrededor de las nueve y media. Isabella afirmó que estaba dando tours a invitados VIP durante el período crucial. Miguel insistió que se fue temprano debido a un dolor de cabeza repentino, aunque su tarjeta de acceso mostró actividad posterior en el edificio.`,
      suspects: ["Diego Ruiz", "Isabella Santos", "Miguel Torres"],
      weapons: ["Vino Envenenado", "Cincel de Escultor", "Pintura Tóxica"],
      locations: ["Ala de Esculturas", "Bar de Vinos", "Ala Este"],
      solution: {
        suspect: "Isabella Santos",
        weapon: "Vino Envenenado",
        location: "Ala de Esculturas",
        explanation: "Isabella Santos envenenó el vino de Alejandra Morales en el ala de esculturas. Como curadora, tenía acceso a todas las áreas y conocía los hábitos de Morales. Usó el tour VIP como cobertura, escapándose para cometer el asesinato mientras mantenía su coartada."
      }
    },
    {
      setting: "Refugio de Montaña",
      victim: "Dr. Roberto Valdez",
      story: `El refugio alpino remoto se convirtió en escena de misterio cuando el Dr. Roberto Valdez, un prominente investigador de vida silvestre, fue descubierto muerto en la cabaña principal del refugio. La nieve continuaba cayendo copiosamente afuera, cortando todos los caminos mientras la Sheriff Williams comenzó a investigar la escena del crimen aislada.

Tres huéspedes se habían estado quedando en el refugio ese fin de semana: Sara Mendoza, la ex compañera de investigación de Valdez que lo había acusado de robar sus datos revolucionarios sobre comportamiento de lobos; Tomás Herrera, un guía de caza que había estado en conflicto con Valdez sobre políticas de conservación de vida silvestre; y la Dra. Lisa Moreno, una veterinaria que había estado colaborando con Valdez en un controvertido proyecto de pruebas en animales.

La sheriff notó varias pistas peculiares: un frasco de tranquilizante animal fue descubierto vacío cerca de la chimenea, su contenido claramente había sido usado. Un cuchillo de caza de la colección de Herrera fue encontrado limpio y reemplazado en la vaina equivocada. Huellas de neumáticos frescas en la nieve sugerían que alguien había intentado irse durante la noche. La laptop de la víctima mostraba que había estado preparándose para exponer las actividades ilegales de alguien.

Sara fue vista en discusión acalorada con Valdez sobre ética de investigación justo antes de la cena. Tomás afirmó que estaba en su habitación limpiando equipo, pero sonidos de una discusión resonaron desde la cabaña principal alrededor de medianoche. La Dra. Moreno sostuvo que estaba sedando un venado herido que había encontrado, explicando sus movimientos nocturnos afuera.`,
      suspects: ["Sara Mendoza", "Tomás Herrera", "Dra. Lisa Moreno"],
      weapons: ["Tranquilizante Animal", "Cuchillo de Caza", "Planta Tóxica"],
      locations: ["Cabaña Principal", "Cuarto de Equipos", "Afuera del Refugio"],
      solution: {
        suspect: "Sara Mendoza",
        weapon: "Tranquilizante Animal",
        location: "Cabaña Principal",
        explanation: "Sara Mendoza usó tranquilizante animal para matar al Dr. Valdez en la cabaña principal. Estaba desesperada por evitar que él expusiera sus datos de investigación falsificados. Su conocimiento de sedantes para animales lo convirtió en el arma perfecta, e intentó incriminar a Tomás plantando evidencia."
      }
    }
  ]
};

export async function GET(request: NextRequest) {
  // Get language parameter from URL
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'en';
  const language = (lang === 'es') ? 'es' : 'en';
  
  try {

    // In a real implementation, you would make an API call to Claude here:
    // const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': process.env.CLAUDE_API_KEY,
    //   },
    //   body: JSON.stringify({
    //     model: 'claude-3-sonnet-20240229',
    //     max_tokens: 2000,
    //     messages: [{
    //       role: 'user',
    //       content: `You are an AI mystery writer competing against human players in a detective game. Create a sophisticated murder mystery story of exactly 500 words in ${language === 'es' ? 'Spanish' : 'English'}.

    //       CRITICAL REQUIREMENTS:
    //       1. The story must contain LOGICAL CLUES that point to the correct solution
    //       2. Include red herrings that could mislead players, but the real clues must be stronger
    //       3. The murder weapon, location, and perpetrator must be deducible from evidence in the story
    //       4. Include specific details like times, physical evidence, alibis, motives, and contradictions
    //       5. Make it challenging but fair - a careful reader should be able to solve it

    //       STRUCTURE:
    //       - 3 suspects with clear motives and opportunity
    //       - 3 possible weapons that make logical sense
    //       - 3 locations where the crime could have occurred
    //       - Physical evidence (fingerprints, DNA, fibers, tools, etc.)
    //       - Digital evidence (phones, cameras, computers, messages)
    //       - Timeline inconsistencies and alibi contradictions
    //       - Witness testimonies that may conflict

    //       EVIDENCE INTEGRATION:
    //       - The correct suspect must have: strongest motive + opportunity + physical evidence linking them
    //       - Include at least 5 specific clues that point to the real killer
    //       - Add 3-4 red herrings that initially seem suspicious but have explanations
    //       - Make the timeline crucial - include specific times and locations

    //       Return ONLY a JSON object with this exact format:
    //       {
    //         "story": "500-word mystery story text here",
    //         "suspects": ["Suspect 1", "Suspect 2", "Suspect 3"],
    //         "weapons": ["Weapon 1", "Weapon 2", "Weapon 3"],
    //         "locations": ["Location 1", "Location 2", "Location 3"],
    //         "solution": {
    //           "suspect": "Correct suspect name",
    //           "weapon": "Correct weapon",
    //           "location": "Correct location",
    //           "explanation": "Detailed explanation listing the 5+ clues that prove this solution"
    //         }
    //       }`
    //     }]
    //   })
    // });

    // For now, return a random template from the selected language
    const templates = mysteryTemplates[language];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    // Add some randomization to make each mystery feel unique
    const shuffledSuspects = [...randomTemplate.suspects].sort(() => Math.random() - 0.5);
    const shuffledWeapons = [...randomTemplate.weapons].sort(() => Math.random() - 0.5);  
    const shuffledLocations = [...randomTemplate.locations].sort(() => Math.random() - 0.5);
    
    return NextResponse.json({
      story: randomTemplate.story,
      suspects: shuffledSuspects,
      weapons: shuffledWeapons,
      locations: shuffledLocations,
      solution: randomTemplate.solution
    });
  } catch (error) {
    console.error('Error generating mystery:', error);
    
    // Fallback mystery if something goes wrong
    const fallbackMystery = language === 'es' ? {
      story: `El pequeño pueblo costero de Puerto Sereno se transformó de paraíso tranquilo a escena del crimen cuando la Alcaldesa Patricia Vega fue encontrada muerta a las 9:30 PM en su oficina del Ayuntamiento. La espesa niebla marina había envuelto el edificio, proporcionando cobertura perfecta mientras el Detective Martínez iniciaba su investigación bajo la tenue luz de emergencia.

Tres individuos tenían motivos poderosos para eliminar a la alcaldesa. Guillermo Torres, el contratista corrupto, había estado bebiendo pesadamente esa noche, sus manos manchadas de yeso y cemento - evidencia de su desesperado trabajo nocturno para ocultar construcciones ilegales antes de la inspección programada de Vega para el día siguiente. Jennifer López, la vicealcaldesa ambiciosa, llevaba un elegante vestido negro con residuos sospechosos de polvo blanco en los puños - polvo que sería identificado como cianuro potásico. Francisco Morales, el empresario despechado, había estado revisando nerviosamente su reloj toda la noche y fue escuchado haciendo llamadas susurradas sobre "finalizar el trato esta noche."

La escena del crimen reveló una historia convincente. Vega yacía junto a su taza de café característica, su contenido mezclado con un veneno de acción rápida que producía el inconfundible aroma de almendras amargas. Su teléfono mostraba un mensaje no enviado que decía: "Jennifer, sé lo que has estado haciendo con los documentos presupuestarios. Reúnete conmigo en mi oficina a las 9:00 PM."

Las grabaciones de seguridad revelaron evidencia crucial del cronograma: a las 8:45 PM, Jennifer fue vista entrando a la oficina portando una cafetera, alegando después que estaba "refrescando el café para la reunión nocturna." Sin embargo, la cafetera contenía café colombiano premium - la preferencia conocida de Vega, que Jennifer ciertamente sabría después de años trabajando juntas.

El cuaderno de Vega contenía evidencia devastadora sobre certificados de autenticidad fraudulentos para varios contratos municipales importantes. Vega había descubierto que López había estado falsificando documentos presupuestarios para desviar fondos municipales a cuentas personales, potencialmente defraudando al pueblo por millones.

La coartada de Torres parecía sólida inicialmente - múltiples testigos lo vieron en el bar municipal hasta las 9:25 PM, apenas cinco minutos antes de que el cuerpo fuera descubierto. Los registros telefónicos de Morales confirmaron que sus llamadas eran a desarrolladores legítimos en Madrid, y su salida del ayuntamiento fue capturada por cámaras externas a las 8:50 PM.

La evidencia más convincente provino de la propia documentación meticulosa de Vega. Había fotografiado varios documentos presupuestarios con su teléfono esa noche, incluyendo primeros planos de firmas falsificadas y sellos de autenticación. Las marcas de tiempo en estas fotos iban desde las 7:30 PM hasta las 8:55 PM - justo antes de enviar el mensaje fatal a López.

Evidencia adicional incluyó los registros financieros de López, que mostraban depósitos significativos de cuentas offshore vinculadas a contratos municipales cuestionables, y una caja fuerte oculta en su oficina conteniendo certificados presupuestarios en blanco y equipo químico especializado para envejecer documentos.`,
      suspects: ["Guillermo Torres", "Jennifer López", "Francisco Morales"],
      weapons: ["Café Envenenado", "Abrecartas", "Planta Tóxica"],
      locations: ["Oficina de la Alcaldesa", "Ayuntamiento", "Estacionamiento"],
      solution: {
        suspect: "Jennifer López",
        weapon: "Café Envenenado",
        location: "Oficina de la Alcaldesa",
        explanation: "Jennifer López envenenó a Patricia Vega con cianuro en el café en la oficina de la alcaldesa. La evidencia es abrumadora: el mensaje no enviado de Vega exponiendo las falsificaciones de López, las grabaciones de seguridad mostrando a López llevando café a la oficina a las 8:45 PM, el residuo de polvo blanco en los puños de su vestido, y la evidencia documentada de Vega del esquema fraudulento presupuestario. López mató a Vega para proteger su operación de fraude municipal de varios millones."
      }
    } : {
      story: `The small coastal town of Seaside Harbor was shocked when Mayor Patricia Wells was found dead in her office at City Hall. The fog had rolled in thick that evening, providing perfect cover for the perpetrator as Police Chief Martinez began his investigation.

Three individuals had reason to want Mayor Wells gone: Gary Thompson, a corrupt contractor whose illegal building permits Wells had recently discovered; Jennifer Liu, the deputy mayor who'd been passed over for promotion multiple times; and Frank Morrison, a local business owner whose waterfront development had been blocked by Wells' environmental policies.

Evidence at the scene painted a confusing picture: a coffee mug containing traces of deadly nightshade sat on the mayor's desk. A letter opener from the city seal collection was missing from its display case. Security footage showed someone had disabled the cameras in the parking garage. Wells' calendar revealed she'd been planning to meet someone secretly that evening.

Thompson was overheard threatening Wells at the town council meeting. Liu claimed she was working late on budget reports in her adjacent office. Morrison insisted he was at home with his wife, though neighbors reported seeing his car downtown much later than he claimed.`,
      suspects: ["Gary Thompson", "Jennifer Liu", "Frank Morrison"],
      weapons: ["Poisoned Coffee", "Letter Opener", "Toxic Plant"],
      locations: ["Mayor's Office", "City Hall", "Parking Garage"],
      solution: {
        suspect: "Jennifer Liu",
        weapon: "Poisoned Coffee",
        location: "Mayor's Office",
        explanation: "Deputy Mayor Jennifer Liu poisoned Patricia Wells' coffee in the mayor's office. Her proximity and access made it easy to slip the nightshade into Wells' evening coffee, and she used her late work as the perfect alibi while planning her ascension to mayor."
      }
    };

    return NextResponse.json(fallbackMystery);
  }
}