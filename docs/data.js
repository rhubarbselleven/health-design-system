var dinosaurData = [
    "Kangnasaurus",
    "Lophostropheus",
    "Spinophorosaurus",
    "Epachthosaurus",
    "Coelurosauria",
    "Lycorhinus",
    "Adasaurus",
    "Draconyx",
    "Ceratops",
    "Lagerpeton",
    "Qiaowanlong",
    "Rhynchosaur",
    "Ningyuansaurus",
    "Palaeolimnornis",
    "Anabisetia",
    "Talarurus",
    "Sphenodontia",
    "Tianyulong",
    "Aepisaurus",
    "Neuquenraptor",
    "Galesaurus",
    "Pachysuchus",
    "Auroraceratops",
    "Hecatasaurus",
    "Barapasaurus",
    "Asiatosaurus",
    "Daanosaurus",
    "Luoyanggia",
    "Eobrontosaurus",
    "Wellnhoferia",
    "Zuolong",
    "Tenchisaurus",
    "Centrosaurus",
    "Falcarius",
    "Ojoraptorsaurus",
    "Lufengocephalus",
    "Vulcanodon",
    "Mollusc",
    "Shunosaurus",
    "Empaterias",
    "Issasaurus",
    "Jiangxisaurus",
    "Laplatasaurus",
    "Aublysodon",
    "Embasaurus",
    "Blikanasaurus",
    "Bonapartenykus",
    "Asiamericana",
    "Arizonasaurus",
    "Cryptoraptor",
    "Morosaurus",
    "Mapusaurus",
    "Buitreraptor",
    "Gravitholus",
    "Vitakrisaurus",
    "Nurosaurus",
    "Cetiosauriscus",
    "Kukufeldia",
    "Propanoplosaurus",
    "Suchoprion",
    "Umarsaurus",
    "Likhoelesaurus",
    "Dasygnathoides",
    "Dubreuillosaurus",
    "Shenzhouraptor",
    "Atrociraptor",
    "Amurosaurus",
    "Latirhinus",
    "Albisaurus",
    "Zupaysaurus",
    "Venenosaurus",
    "Syrmosaurus",
    "Arkharavia",
    "Yueosaurus",
    "Tianchungosaurus",
    "Dyslocosaurus",
    "Sinraptor",
    "Owenodon",
    "Pelycosaur",
    "Duriavenator",
    "Haplocheirus",
    "Epidendrosaurus",
    "Nyasasaurus",
    "Tawasaurus",
    "Lisboasaurus",
    "Ahshislepelta",
    "Magnirostris",
    "Psittacosaurus",
    "Orodromeus",
    "Ostafrikasaurus",
    "Nemegtomaia",
    "Dracorex",
    "Ovoraptor",
    "Amazonsaurus",
    "Leyesaurus",
    "Dollodon",
    "Cryptosaurus",
    "Coahuilaceratops",
    "Variraptor",
    "Panamericansaurus",
    "Nodocephalosaurus",
    "Nasutoceratops",
    "Prosaurolophus",
    "Jingshanosaurus",
    "Teleocrater",
    "Tribelesodon",
    "Mochlodon",
    "Eohadrosaurus",
    "Comanchesaurus",
    "Limnornis",
    "Gigantspinosaurus",
    "Oxalaia",
    "Wuerhosaurus",
    "Mtapaiasaurus",
    "Longisquama",
    "Velocisaurus",
    "Aorun",
    "Sinopliosaurus",
    "Gigantosaurus",
    "Sphenospondylus",
    "Dinotyrannus",
    "Rhabdodon",
    "Kritosaurus",
    "Lamplughsaura",
    "Notohypsilophodon",
    "Tsagantegia",
    "Brontoraptor",
    "Argyrosaurus",
    "Lambeosaurus",
    "Heterosaurus",
    "Tazoudasaurus",
    "Valdoraptor",
    "Microhadrosaurus",
    "Pycnonemosaurus",
    "Manidens",
    "Coelophysis",
    "Hulsanpes",
    "Losillasaurus",
    "Polacanthoides",
    "Lanzhousaurus",
    "Walgettosuchus",
    "Sauroniops",
    "Magulodon",
    "Pneumatoraptor",
    "Altispinax",
    "Alnashetri",
    "Hoplitosaurus",
    "Rahiolisaurus",
    "Luanpingosaurus",
    "Abrosaurus",
    "Palaeosaurus",
    "Iguanoides",
    "Abydosaurus",
    "Riodevasaurus",
    "Stormbergia",
    "Bihariosaurus",
    "Yuanmousaurus",
    "Sphenosuchus",
    "Dashanpusaurus",
    "Crocodilia",
    "Enigmosaurus",
    "Montanoceratops",
    "Frenguellisaurus",
    "Segnosaurus",
    "Kryptops",
    "Labocania",
    "Sinocalliopteryx",
    "Dromiceiomimus",
    "Isisaurus",
    "Archaeornithoides",
    "Deinonychus",
    "Allosaurus",
    "Stephanosaurus",
    "Sinornithoides",
    "Incisivosaurus",
    "Ornitholestes",
    "Ankylosaurus",
    "Plateosaurus",
    "Shidaisaurus",
    "Platyceratops",
    "Agnosphitys",
    "Changdusaurus",
    "Nothosaur",
    "Orthogoniosaurus",
    "Titanoceratops",
    "Dysganus",
    "Lamaceratops",
    "Helioceratops",
    "Nanyangosaurus",
    "Khaan",
    "Cryptodraco",
    "Chasmosaurus",
    "Rileyasuchus",
    "Aeolosaurus",
    "Yizhousaurus",
    "Echinodon",
    "Omnivoropteryx",
    "Lengosaurus",
    "Megadactylus",
    "Mamenchisaurus",
    "Notoceratops",
    "Pachysaurus",
    "Tianzhenosaurus",
    "Zhuchengceratops",
    "Tyreophorus",
    "Nedcolbertia",
    "Shixinggia",
    "Jeholosaurus",
    "Ornithosuchus",
    "Veterupristisaurus",
    "Rayososaurus",
    "Velafrons",
    "Lapparentosaurus",
    "Seismosaurus",
    "Tsuchikurasaurus",
    "Styracosaurus",
    "Dilophosaurus",
    "Gasparinisaura",
    "Xiaotingia",
    "Dromaeosaurus",
    "Scansoriopteryx",
    "Eurolimnornis",
    "Proterosuchid",
    "Nipponosaurus",
    "Brachiosaurus",
    "Vitaridrinda",
    "Mantellodon",
    "Sphaerotholus",
    "Shuosaurus",
    "Koutalisaurus",
    "Cardiodon",
    "Yixianosaurus",
    "Jurassosaurus",
    "Jiutaisaurus",
    "Gryphognathus",
    "Archaeornithomimus",
    "Griphornis",
    "Szechuanosaurus",
    "Pneumatoarthrus",
    "Basutodon",
    "Aletopelta",
    "Tendaguria",
    "Riojasaurus",
    "Creosaurus",
    "Harpymimus",
    "Huaxiagnathus",
    "Carnotaurus",
    "Beipiaosaurus",
    "Teratophoneus",
    "Cedarosaurus",
    "Omosaurus",
    "Wyleyia",
    "Aachenosaurus",
    "Atlantosaurus",
    "Bilbeyhallorum",
    "Balochisaurus",
    "Ouranosaurus",
    "Fukuititan",
    "Sarcolestes",
    "Alocodon",
    "Amphisaurus",
    "Lametasaurus",
    "Raptorex",
    "Sinosaurus",
    "Doratodon",
    "Ankistrodon",
    "Chuanjiesaurus",
    "Parasaurolophus",
    "Albertonykus",
    "Efraasia",
    "Alaskacephale",
    "Torilion",
    "Rapator",
    "Sauroplites",
    "Thecocoelurus",
    "Lirainosaurus",
    "Xixiasaurus",
    "Conchoraptor",
    "Paralititan",
    "Arcusaurus",
    "Becklespinax",
    "Thecodontosaurus",
    "Taveirosaurus",
    "Daemonosaurus",
    "Suuwassea",
    "Albertosaurus",
    "Nouerosaurus",
    "Marshosaurus",
    "Xuanhuasaurus",
    "Algoasaurus",
    "Capitalsaurus",
    "Xenoposeidon",
    "Cryolophosaurus",
    "Gobipteryx",
    "Stereosaurus",
    "Nemegtia",
    "Proyandusaurus",
    "Thyreophora",
    "Xiaosaurus",
    "Tatankaceratops",
    "Hanwulosaurus",
    "Gryphoceratops",
    "Linheraptor",
    "Ornithomimoides",
    "Edmontonia",
    "Aerosteon",
    "Ninghsiasaurus",
    "Prenoceratops",
    "Vagaceratops",
    "Sinucerasaurus",
    "Hongshanosaurus",
    "Hexinlusaurus",
    "Indosuchus",
    "Moshisaurus",
    "Alashansaurus",
    "Berberosaurus",
    "Elaltitan",
    "Marisaurus",
    "Rhoetosaurus",
    "Tatankacephalus",
    "Bienosaurus",
    "Dracopelta",
    "Chiayusaurus",
    "Pseudosuchia",
    "Sarcosaurus",
    "Shuvuuia",
    "Unaysaurus",
    "Amtosaurus",
    "Nqwebasaurus",
    "Claorhynchus",
    "Prolacertiform",
    "Honghesaurus",
    "Ugrosaurus",
    "Aegyptosaurus",
    "Gallimimus",
    "Clasmodosaurus",
    "Hypacrosaurus",
    "Caenagnathus",
    "Velocipes",
    "Lessemsaurus",
    "Agrosaurus",
    "Paronychodon",
    "Maleevosaurus",
    "Leipsanosaurus",
    "Clevelanotyrannus",
    "Dynamosaurus",
    "Megacervixosaurus",
    "Protohadros",
    "Polyonax",
    "Daxiatitan",
    "Spondylosoma",
    "Ichthyovenator",
    "Demandasaurus",
    "Dimodosaurus",
    "Torvosaurus",
    "Gwyneddosaurus",
    "Cystosaurus",
    "Irritator",
    "Zanclodon",
    "Rugops",
    "Ignavusaurus",
    "Chinshakiangosaurus",
    "Zhejiangosaurus",
    "Pachyrhinosaurus",
    "Stenotholus",
    "Iuticosaurus",
    "Tyrannotitan",
    "Xixianykus",
    "Palaeopteryx",
    "Vitakridrinda",
    "Planicoxa",
    "Jianchangosaurus",
    "Sinovenator",
    "Ohmdenosaurus",
    "Protecovasaurus",
    "Eoceratops",
    "Laevisuchus",
    "Cumnoria",
    "Ratchasimasaurus",
    "Elaphrosaurus",
    "Dracovenator",
    "Abelisaurus",
    "Sangonghesaurus",
    "Austrocheirus",
    "Calamosaurus",
    "Vectensia",
    "Elosaurus",
    "Termatosaurus",
    "Pleuropeltus",
    "Chubutisaurus",
    "Macrophalangia",
    "Futalongkosaurus",
    "Acristavus",
    "Wintonotitan",
    "Diclonius",
    "Nanosaurus",
    "Tonganosaurus",
    "Tarascosaurus",
    "Amphicoelicaudia",
    "Achillesaurus",
    "Delapparentia",
    "Argentinosaurus",
    "Sulaimansaurus",
    "Koparion",
    "Brachytrachelopan",
    "Bakesaurus",
    "Rahona",
    "Oryctodromeus",
    "Campylodon",
    "Stygivenator",
    "Wangonisaurus",
    "Genyodectes",
    "Acrocanthosaurus",
    "Danubiosaurus",
    "Deltadromeus",
    "Rileya",
    "Borealosaurus",
    "Rioarribasaurus",
    "Gondwanatitan",
    "Lophorhothon",
    "Talenkauen",
    "Diracodon",
    "Nanshiungosaurus",
    "Bradycneme",
    "Ferganocephale",
    "Cheneosaurus",
    "Wulagasaurus",
    "Tanystrosuchus",
    "Comahuesaurus",
    "Actiosaurus",
    "Jiangjunmiaosaurus",
    "Xinjiangovenator",
    "Gadolosaurus",
    "Clarencea",
    "Avemetatarsalia",
    "Dakotadon",
    "Diapsid",
    "Albinykus",
    "Pectinodon",
    "Protorosaurus",
    "Ginnareemimus",
    "Doryphorosaurus",
    "Dalianraptor",
    "Megapnosaurus",
    "Scelidosaurus",
    "Metriorhynchid",
    "Piatnitzkysaurus",
    "Haplocanthosaurus",
    "Phytosaur",
    "Manospondylus",
    "Gansutitan",
    "Neovenator",
    "Brasileosaurus",
    "Judiceratops",
    "Khetranisaurus",
    "Fish",
    "Proceratosaurus",
    "Zatomus",
    "Ceratosaurus",
    "Unescoceratops",
    "Telmatosaurus",
    "Segisaurus",
    "Pachyspondylus",
    "Caseosaurus",
    "Ultrasauros",
    "Dongbeititan",
    "Galvesaurus",
    "Crocodylomorph",
    "Ephoenosaurus",
    "Fossil",
    "Crosbysaurus",
    "Coelosaurus",
    "Unenlagia",
    "Strenusaurus",
    "Concavenator",
    "Fukuiraptor",
    "Camarasaurus",
    "Iliosuchus",
    "Huayangosaurus",
    "Kileskus",
    "Clepsysaurus",
    "Richardoestesia",
    "Sphenosaurus",
    "Scutellosaurus",
    "Garudimimus",
    "Hexing",
    "Nanningosaurus",
    "Sonorasaurus",
    "Pradhania",
    "Orosaurus",
    "Andesaurus",
    "Genusaurus",
    "Huxleysaurus",
    "Elopteryx",
    "Alectrosaurus",
    "Tecovasaurus",
    "Parksosaurus",
    "Paranthodon",
    "Airakoraptor",
    "Jobaria",
    "Ichabodcraniosaurus",
    "Muyelensaurus",
    "Sacisaurus",
    "Deinodon",
    "Patricosaurus",
    "Maleevus",
    "Tylocephale",
    "Sugiyamasaurus",
    "Nodosaurus",
    "Aliwalia",
    "Kerberosaurus",
    "Kazaklambia",
    "Eolambia",
    "Dongyangosaurus",
    "Citipati",
    "Euskelosaurus",
    "Trigonosaurus",
    "Epidexipteryx",
    "Dolichosuchus",
    "Walkeria",
    "Labrosaurus",
    "Condorraptor",
    "Tichosteus",
    "Uberabatitan",
    "Magnosaurus",
    "Janenschia",
    "Anasazisaurus",
    "Macrogryphosaurus",
    "Erliansaurus",
    "Ornithotarsus",
    "Bayosaurus",
    "Santanaraptor",
    "Zhuchengtyrannus",
    "Lukousaurus",
    "Sauroposeidon",
    "Ampelosaurus",
    "Pampadromaeus",
    "Erectopus",
    "Glyptodontopelta",
    "Drinker",
    "Leaellynasaura",
    "Magyarosaurus",
    "Postosuchus",
    "Szechuanoraptor",
    "Yubasaurus",
    "Brachyrophus",
    "Cionodon",
    "Sellacoxa",
    "Elachistosuchus",
    "Shuvosaurus",
    "Sauraechmodon",
    "Microdontosaurus",
    "Carcharodontosaurus",
    "Brachylophosaurus",
    "Theropoda",
    "Tapinocephalus",
    "Changchunsaurus",
    "Cladeiodon",
    "Pareiasaurus",
    "Heishansaurus",
    "Aristosuchus",
    "Protiguanodon",
    "Brohisaurus",
    "Eupodosaurus",
    "Datousaurus",
    "Giraffatitan",
    "Jaklapallisaurus",
    "Tugulusaurus",
    "Compsognathus",
    "Ilokelesia",
    "Revueltoraptor",
    "Tuojiangosaurus",
    "Huaxiasaurus",
    "Palaeocursornis",
    "Onychosaurus",
    "Ceratonykus",
    "Amargatitanis",
    "Albalophosaurus",
    "Byronosaurus",
    "Cryptovolans",
    "Shenzhousaurus",
    "Rapetosaurus",
    "Altirhinus",
    "Sanjuansaurus",
    "Dysalotosaurus",
    "Archaeopteryx",
    "Liliensternus",
    "Beelemodon",
    "Xuanhuaceratops",
    "Protrachodon",
    "Caenagnathasia",
    "Willinakaqe",
    "Atacamatitan",
    "Lourinhanosaurus",
    "Yaverlandia",
    "Ligomasaurus",
    "Suchomimus",
    "Brasilotitan",
    "Jenghizkhan",
    "Aggiosaurus",
    "Elrhazosaurus",
    "Yingshanosaurus",
    "Australovenator",
    "Ichthyornis",
    "Valdosaurus",
    "Yuanmouraptor",
    "Prolacertiformes",
    "Tarchia",
    "Hesperosaurus",
    "Azendohsaurus",
    "Eucentrosaurus",
    "Scipionyx",
    "Petrobrasaurus",
    "Hudiesaurus",
    "Sinornithosaurus",
    "Shuangmiaosaurus",
    "Tianchisaurus",
    "Araucanoraptor",
    "Poposaurus",
    "Pararhabdodon",
    "Osmakasaurus",
    "Siamotyrannus",
    "Galveosaurus",
    "Yangchuanosaurus",
    "Microcephale",
    "Mirischia",
    "Probactrosaurus",
    "Yunxiansaurus",
    "Enantiornithine",
    "Cedrorestes",
    "Chaoyangsaurus",
    "Loricatosaurus",
    "Stygimoloch",
    "Venaticosuchus",
    "Gorgosaurus",
    "Anchiornis",
    "Ischisaurus",
    "Bactrosaurus",
    "Quilmesaurus",
    "Fukuisaurus",
    "Stegosaurus",
    "Griphosaurus",
    "Graciliceratops",
    "Oligosaurus",
    "Baotianmansaurus",
    "Eocursor",
    "Turtle",
    "Macelognathus",
    "Arctosaurus",
    "Streptospondylus",
    "Texasetes",
    "Dianchungosaurus",
    "Birds",
    "Nomingia",
    "Sinornithomimus",
    "Hierosaurus",
    "Abdallahsaurus",
    "Jaxartosaurus",
    "Sanchusaurus",
    "Tarbosaurus",
    "Sinocoelurus",
    "Timimus",
    "Herrerasaurus",
    "Giganotosaurus",
    "Tsaagan",
    "Anthracothere",
    "Yezosaurus",
    "Chihuahuasaurus",
    "Cathartesaura",
    "Domeykosaurus",
    "Loncosaurus",
    "Archaeoceratops",
    "Udanoceratops",
    "Gojirasaurus",
    "Dongyangopelta",
    "Duriatitan",
    "Chondrosteus",
    "Arkanosaurus",
    "Lusotitan",
    "Diceratus",
    "Nuoersaurus",
    "Wadhurstia",
    "Sauropelta",
    "Ultrasaurus",
    "Indosaurus",
    "Kotasaurus",
    "Urbacodon",
    "Zhongyuansaurus",
    "Tanystropheus",
    "Mifunesaurus",
    "Pegomastax",
    "Gobititan",
    "Lusitanosaurus",
    "Caulodon",
    "Baryonyx",
    "Tataouinea",
    "Longosaurus",
    "Pareiasaur",
    "Leshansaurus",
    "Machairasaurus",
    "Colossosaurus",
    "Arstanosaurus",
    "Wakinosaurus",
    "Lanasaurus",
    "Dryosaurus",
    "Sterrholophus",
    "Dachungosaurus",
    "Chialingosaurus",
    "Jiangjunosaurus",
    "Klamelisaurus",
    "Rauisuchia",
    "Caudipteryx",
    "Jinfengopteryx",
    "Leptoceratops",
    "Sinotyrannus",
    "Poekilopleuron",
    "Gobisaurus",
    "Angaturama",
    "Pterosaur",
    "Aetonyx",
    "Angolatitan",
    "Tanius",
    "Therizinosaurus",
    "Tastavinsaurus",
    "Lancangosaurus",
    "Dinheirosaurus",
    "Brachypodosaurus",
    "Gobiceratops",
    "Fruitadens",
    "Monkonosaurus",
    "Spinostropheus",
    "Cristatusaurus",
    "Bolong",
    "Rebbachisaurus",
    "Monolophosaurus",
    "Alioramus",
    "Hypsirophus",
    "Olorotitan",
    "Euoplocephalus",
    "Juravenator",
    "Euhelopus",
    "Epanterias",
    "Lancanjiangosaurus",
    "Xianshanosaurus",
    "Ekrixinatosaurus",
    "Achillobator",
    "Hesperonychus",
    "Pachysauriscus",
    "Ruyangosaurus",
    "Gongbusaurus",
    "Teratosaurus",
    "Ruehleia",
    "Yaleosaurus",
    "Canardia",
    "Brachyceratops",
    "Pantydraco",
    "Afrovenator",
    "Mendozasaurus",
    "Pedopenna",
    "Blasisaurus",
    "Astrodon",
    "Mandschurosaurus",
    "Drusilasaura",
    "Libycosaurus",
    "Eucamerotus",
    "Tonouchisaurus",
    "Didanodon",
    "Proplanicoxa",
    "Kentrurosaurus",
    "Trinisaura",
    "Fusuisaurus",
    "Kentrosaurus",
    "Eocarcharia",
    "Albertaceratops",
    "Rutellum",
    "Saltasaurus",
    "Majungatholus",
    "Mussaurus",
    "Zigongosaurus",
    "Euacanthus",
    "Craspedodon",
    "Ingenia",
    "Priodontognathus",
    "Rubeosaurus",
    "Gyposaurus",
    "Utahraptor",
    "Pukyongosaurus",
    "Coelurosaur",
    "Silvisaurus",
    "Troodon",
    "Jixiangornis",
    "Pawpawsaurus",
    "Oohkotokia",
    "Hadrosauravus",
    "Shaochilong",
    "Ponerosteus",
    "Ischyrosaurus",
    "Hadrosaurus",
    "Gryposaurus",
    "Spinops",
    "Peloroplites",
    "Daspletosaurus",
    "Dravidosaurus",
    "Hagryphus",
    "Sphenosuchia",
    "Ligabueino",
    "Mymoorapelta",
    "Tatisaurus",
    "Trimucrodon",
    "Cathetosaurus",
    "Teinurosaurus",
    "Antetonitrus",
    "Rajasaurus",
    "Fabrosaurus",
    "Angloposeidon",
    "Levnesovia",
    "Mongolosaurus",
    "Asiaceratops",
    "Avipes",
    "Turiasaurus",
    "Eucnemesaurus",
    "Otogosaurus",
    "Martharaptor",
    "Tsintaosaurus",
    "Hypsilophodon",
    "Gigantoscelus",
    "Palaeosauriscus",
    "Hironosaurus",
    "Paludititan",
    "Anatosaurus",
    "Kaatedocus",
    "Linhevenator",
    "Pellegrinisaurus",
    "Sanpasaurus",
    "Lapampasaurus",
    "Inosaurus",
    "Eomamenchisaurus",
    "Liassaurus",
    "Jinzhousaurus",
    "Equijubus",
    "Dryptosaurus",
    "Nopcsaspondylus",
    "Changtusaurus",
    "Tapuiasaurus",
    "Diabloceratops",
    "Dakosaurus",
    "Chassternbergia",
    "Limaysaurus",
    "Huaxiaosaurus",
    "Minotaurasaurus",
    "Uteodon",
    "Micropachycephalosaurus",
    "Avisaurus",
    "Siamodon",
    "Ornithomerus",
    "Eodromaeus",
    "Turanoceratops",
    "Nambalia",
    "Cruxicheiros",
    "Riojasuchus",
    "Stokesosaurus",
    "Amygdalodon",
    "Linhenykus",
    "Heterodontosaurus",
    "Dromicosaurus",
    "Bahariasaurus",
    "Xiongguanlong",
    "Jeyawati",
    "Polyodontosaurus",
    "Morinosaurus",
    "Campylodoniscus",
    "Aralosaurus",
    "Pentaceratops",
    "Squalodon",
    "Saurornitholestes",
    "Yandusaurus",
    "Bruhathkayosaurus",
    "Kinnareemimus",
    "Tornieria",
    "Scaphonyx",
    "Barosaurus",
    "Titanosaurus",
    "Volkheimeria",
    "Brontomerus",
    "Megalosaurus",
    "Rhopalodon",
    "Huanghetitan",
    "Ngexisaurus",
    "Jiangshanosaurus",
    "Archosaur",
    "Sciurumimus",
    "Histriasaurus",
    "Spinosaurus",
    "Eoraptor",
    "Phaedrolosaurus",
    "Betasuchus",
    "Belodon",
    "Bagaraatan",
    "Protognathus",
    "Marmarospondylus",
    "Dinosaur",
    "Darwinsaurus",
    "Apatodon",
    "Eotyrannus",
    "Struthiomimus",
    "Pelecanimimus",
    "Gideonmantellia",
    "Appalachiosaurus",
    "Edmontosaurus",
    "Acracanthus",
    "Machimosaurus",
    "Razanandrongobe",
    "Uintasaurus",
    "Magnapaulia",
    "Moabosaurus",
    "Ojoceratops",
    "Yaxartosaurus",
    "Macroscelosaurus",
    "Aniksosaurus",
    "Guanlong",
    "Futabasaurus",
    "Proceratops",
    "Xuwulong",
    "Ricardoestesia",
    "Symphyrophus",
    "Pleurocoelus",
    "Damalasaurus",
    "Naashoibitosaurus",
    "Panphagia",
    "Graciliraptor",
    "Ornithoides",
    "Futalognkosaurus",
    "Pachycephalosaurus",
    "Plesiosaur",
    "Astrophocaudia",
    "Gilmoreosaurus",
    "Diamantinasaurus",
    "Eucercosaurus",
    "Gavinosaurus",
    "Suchosaurus",
    "Eugongbusaurus",
    "Camelotia",
    "Shanxia",
    "Antarctopelta",
    "Traukutitan",
    "Saurornithoides",
    "Hippodraco",
    "Nteregosaurus",
    "Sauropodus",
    "Coelurosauravus",
    "Stereocephalus",
    "Adeopapposaurus",
    "Ctenosauriscid",
    "Paraiguanodon",
    "Eosinopteryx",
    "Archaeornis",
    "Bambiraptor",
    "Isanosaurus",
    "Stegosaurides",
    "Avaceratops",
    "Gannansaurus",
    "Triceratops",
    "Paluxysaurus",
    "Denversaurus",
    "Bathygnathus",
    "Katsuyamasaurus",
    "Barsboldia",
    "Mojoceratops",
    "Eucoelophysis",
    "Microraptor",
    "Calamospondylus",
    "Fusinasus",
    "Agathaumas",
    "Protoceratops",
    "Eustreptospondylus",
    "Macrurosaurus",
    "Atlascopcosaurus",
    "Claosaurus",
    "Avicephala",
    "Tochisaurus",
    "Protognathosaurus",
    "Kakuru",
    "Neuquensaurus",
    "Chilantaisaurus",
    "Chindesaurus",
    "Parvicursor",
    "Phuwiangosaurus",
    "Saltriosaurus",
    "Edmarka",
    "Chingkankousaurus",
    "Bicentenaria",
    "Kemkemia",
    "Microceratus",
    "Chaoyangosaurus",
    "Atlasaurus",
    "Eotriceratops",
    "Neimongosaurus",
    "Unicerosaurus",
    "Qinlingosaurus",
    "Laosaurus",
    "Craterosaurus",
    "Dacentrurus",
    "Geminiraptor",
    "Erlikosaurus",
    "Bonitasaura",
    "Arrhinoceratops",
    "Triassolestes",
    "Hisanohamasaurus",
    "Oplosaurus",
    "Supersaurus",
    "Achelousaurus",
    "Rinconsaurus",
    "Serendipaceratops",
    "Eoabelisaurus",
    "Dystrophaeus",
    "Thotobolosaurus",
    "Blancocerosaurus",
    "Cetiosaurus",
    "Roccosaurus",
    "Chondrosteosaurus",
    "Fulengia",
    "Mohammadisaurus",
    "Halticosaurus",
    "Lancangjiangosaurus",
    "Teyuwasu",
    "Breviceratops",
    "Rhodanosaurus",
    "Metriacanthosaurus",
    "Overosaurus",
    "Newtonsaurus",
    "Gracilisuchus",
    "Pseudolagosuchus",
    "Sellosaurus",
    "Ajkaceratops",
    "Lufengosaurus",
    "Yamaceratops",
    "Bagaceratops",
    "Apatosaurus",
    "Khateranisaurus",
    "Batyrosaurus",
    "Cinizasaurus",
    "Tanycolagreus",
    "Bainoceratops",
    "Silesaurid",
    "Byranjaffia",
    "Shamosaurus",
    "Austrosaurus",
    "Amtocephale",
    "Cylindricodon",
    "Huabeisaurus",
    "Regnosaurus",
    "Callovosaurus",
    "Heptasteornis",
    "Gryponyx",
    "Tylosteus",
    "Gargoyleosaurus",
    "Kundurosaurus",
    "Mononykus",
    "Secernosaurus",
    "Puertasaurus",
    "Bellusaurus",
    "Archosauriform",
    "Qiupalong",
    "Alamosaurus",
    "Dystylosaurus",
    "Tethyshadros",
    "Selimanosaurus",
    "Albertadromeus",
    "Karongasaurus",
    "Kaijiangosaurus",
    "Microvenator",
    "Amphicoelias",
    "Eshanosaurus",
    "Salimosaurus",
    "Avimimus",
    "Elvisaurus",
    "Bonatitan",
    "Procheneosaurus",
    "Tetragonosaurus",
    "Mammal",
    "Oshanosaurus",
    "Jurapteryx",
    "Paleosaurus",
    "Dinosauromorph",
    "Plateosauravus",
    "Hungarosaurus",
    "Chromogisaurus",
    "Anoplosaurus",
    "Amargasaurus",
    "Merosaurus",
    "Alwalkeria",
    "Macrodontophion",
    "Shanshanosaurus",
    "Gongxianosaurus",
    "Vectisaurus",
    "Kitadanisaurus",
    "Agustinia",
    "Sulaimanisaurus",
    "Thescelosaurus",
    "Zephyrosaurus",
    "Arenysaurus",
    "Patagosaurus",
    "Laornis",
    "Protoavis",
    "Tenantosaurus",
    "Yinlong",
    "Bravoceratops",
    "Saurophaganax",
    "Coeluroides",
    "Seitaad",
    "Trialestes",
    "Glishades",
    "Cedarpelta",
    "Rinchenia",
    "Lesothosaurus",
    "Dromaeosaur",
    "Nuoerosaurus",
    "Hallopus",
    "Yanornis",
    "Tomodon",
    "Juratyrant",
    "Shanyangosaurus",
    "Deuterosaurus",
    "Coelurus",
    "Zizhongosaurus",
    "Hypselospinus",
    "Austroraptor",
    "Brachytaenius",
    "Orcomimus",
    "Acrotholus",
    "Chirostenotes",
    "Emausaurus",
    "Nigersaurus",
    "Animantarx",
    "Luanchuanraptor",
    "Zuniceratops",
    "Wannanosaurus",
    "Abrictosaurus",
    "Heyuannia",
    "Synapsid",
    "Struthiosaurus",
    "Yunnanosaurus",
    "Noasaurus",
    "Tyrannosaurid",
    "Yibinosaurus",
    "Thespesius",
    "Priconodon",
    "Marasuchus",
    "Anchisaurus",
    "Iguanacolossus",
    "Patagonykus",
    "Haplocanthus",
    "Corythosaurus",
    "Limusaurus",
    "Coloradisaurus",
    "Similicaudipteryx",
    "Leptospondylus",
    "Aviatyrannis",
    "Hortalotarsus",
    "Tienshanosaurus",
    "Pamparaptor",
    "Peishansaurus",
    "Succinodon",
    "Dinosaurus",
    "Rachitrema",
    "Dachongosaurus",
    "Therapsida",
    "Saurolophus",
    "Pekinosaurus",
    "Skorpiovenator",
    "Microsaurops",
    "Ammosaurus",
    "Ichthyosaur",
    "Antarctosaurus",
    "Liaoningosaurus",
    "Nothronychus",
    "Spinosuchus",
    "Iguanosaurus",
    "Anchiceratops",
    "Orkoraptor",
    "Microcoelus",
    "Xuanhanosaurus",
    "Geranosaurus",
    "Goyocephale",
    "Ankylosauria",
    "Dahalokely",
    "Daptosaurus",
    "Loricosaurus",
    "Australodocus",
    "Pterospondylus",
    "Gigantoraptor",
    "Hylaeosaurus",
    "Caudocoelus",
    "Opisthocoelicaudia",
    "Rhadinosaurus",
    "Ligabuesaurus",
    "Aragosaurus",
    "Rocasaurus",
    "Parrosaurus",
    "Sahaliyania",
    "Agilisaurus",
    "Orthomerus",
    "Penelopognathus",
    "Liaoceratops",
    "Dyoplosaurus",
    "Stenonychosaurus",
    "Walkersaurus",
    "Narambuenatitan",
    "Pitekunsaurus",
    "Camarillasaurus",
    "Procolophonid",
    "Epichirostenotes",
    "Beishanlong",
    "Gasosaurus",
    "Coronosaurus",
    "Zapalasaurus",
    "Sauraechinodon",
    "Glacialisaurus",
    "Therapsid",
    "Gravisaurus",
    "Lewisuchus",
    "Jainosaurus",
    "Centemodon",
    "Arkansaurus",
    "Einiosaurus",
    "Palaeoscincus",
    "Cerasinops",
    "Microceratops",
    "Pteropelyx",
    "Sigilmassasaurus",
    "Staurikosaurus",
    "Pyroraptor",
    "Ornithodesmus",
    "Asylosaurus",
    "Anodontosaurus",
    "Siluosaurus",
    "Carnosauria",
    "Qantassaurus",
    "Ornithomimus",
    "Dinodocus",
    "Chuxiongosaurus",
    "Anserimimus",
    "Camptonotus",
    "Lagosuchus",
    "Anatotitan",
    "Dryptosauroides",
    "Silesaurus",
    "Pachysaurops",
    "Saichania",
    "Procerosaurus",
    "Lucianosaurus",
    "Koreasaurus",
    "Lurdusaurus",
    "Piveteausaurus",
    "Jeholornis",
    "Angulomastacator",
    "Hoplosaurus",
    "Saltopus",
    "Shanag",
    "Homalocephale",
    "Torosaurus",
    "Fenestrosaurus",
    "Jubbulpuria",
    "Mtotosaurus",
    "Nemegtosaurus",
    "Maiasaura",
    "Yutyrannus",
    "Ozraptor",
    "Lariosaurus",
    "Bugenasaura",
    "Ornatotholus",
    "Aardonyx",
    "Herbstosaurus",
    "Tianyuraptor",
    "Diplodocus",
    "Kosmoceratops",
    "Muttaburrasaurus",
    "Kagasaurus",
    "Atsinganosaurus",
    "Massospondylus",
    "Utahceratops",
    "Nanotyrannus",
    "Qingxiusaurus",
    "Avalonianus",
    "Erketu",
    "Fulgurotherium",
    "Kayentavenator",
    "Protarchaeopteryx",
    "Chungkingosaurus",
    "Krzyzanowskisaurus",
    "Yimenosaurus",
    "Aurornis",
    "Ganzhousaurus",
    "Pinacosaurus",
    "Archosauromorph",
    "Niobrarasaurus",
    "Melanorosaurus",
    "Baurutitan",
    "Elmisaurus",
    "Euronychodon",
    "Tehuelchesaurus",
    "Sinusonasus",
    "Omeisaurus",
    "Agujaceratops",
    "Aucasaurus",
    "Wulatelong",
    "Stegopelta",
    "Europasaurus",
    "Alxasaurus",
    "Stegosauroides",
    "Tangvayosaurus",
    "Pliosaur",
    "Unquillosaurus",
    "Xixiposaurus",
    "Ornithopsis",
    "Crataeomus",
    "Madsenius",
    "Diplotomodon",
    "Kulceratops",
    "Adamantisaurus",
    "Nyororosaurus",
    "Monoclonius",
    "Kuszholia",
    "Jintasaurus",
    "Camptosaurus",
    "Masiakasaurus",
    "Parhabdodon",
    "Prodeinodon",
    "Saurophagus",
    "Alvarezsaurus",
    "Mantellisaurus",
    "Aristosaurus",
    "Suzhousaurus",
    "Limnosaurus",
    "Dromaeosauroides",
    "Augustia",
    "Spinosaurid",
    "Othnielia",
    "Thecospondylus",
    "Cetacea",
    "Medusaceratops",
    "Zalmoxes",
    "Koreaceratops",
    "Syngonosaurus",
    "Dicraeosaurus",
    "Xenoceratops",
    "Scleromochlus",
    "Deinocheirus",
    "Chuandongocoelurus",
    "Itemirus",
    "Phyllodon",
    "Megaraptor",
    "Philovenator",
    "Ferganasaurus",
    "Pelorosaurus",
    "Nebulasaurus",
    "Barilium",
    "Nedoceratops",
    "Acanthopholis",
    "Nuthetes",
    "Panoplosaurus",
    "Quaesitosaurus",
    "Crocodile",
    "Archaeoraptor",
    "Charonosaurus",
    "Eureodon",
    "Hanssuesia",
    "Guaibasaurus",
    "Camposaurus",
    "Hylosaurus",
    "Zapsalis",
    "Bistahieversor",
    "Erlicosaurus",
    "Procompsognathus",
    "Hypselosaurus",
    "Prenocephale",
    "Malarguesaurus",
    "Tenontosaurus",
    "Kittysaurus",
    "Iguanodon",
    "Palaeoctonus",
    "Trachodon",
    "Wyomingraptor",
    "Huehuecanauhtlus",
    "Theiophytalia",
    "Nectosaurus",
    "Scolosaurus",
    "Pisanosaurus",
    "Kunmingosaurus",
    "Liubangosaurus",
    "Malawisaurus",
    "Pakisaurus",
    "Carnosaur",
    "Leonerasaurus",
    "Oviraptor",
    "Texacephale",
    "Shantungosaurus",
    "Zhuchengosaurus",
    "Gripposaurus",
    "Polacanthus",
    "Xenotarsosaurus",
    "Dinosauriform",
    "Hypsibema",
    "Podokesaurus",
    "Sonidosaurus",
    "Colepiocephale",
    "Kelmayisaurus",
    "Crichtonsaurus",
    "Stegoceras",
    "Borogovia",
    "Lourinhasaurus",
    "Picrodon",
    "Mononychus",
    "Bothriospondylus",
    "Siamosaurus",
    "Technosaurus",
    "Theropod",
    "Neosodon",
    "Velociraptor",
    "Eolosaurus",
    "Archaeovolans",
    "Chebsaurus",
    "Compsosuchus",
    "Othnielosaurus",
    "Banji",
    "Proiguanodon",
    "Rahonavis",
    "Majungasaurus",
    "Nanotyrannosaurus",
    "Bissektipelta",
    "Revueltosaurus",
    "Lexovisaurus",
    "Antrodemus",
    "Hikanodon",
    "Tyrannosaurus",
    "Barrosasaurus",
    "Sinoceratops",
    "Megadontosaurus",
    "Sinosauropteryx",
    "Heilongjiangosaurus",
    "Maxakalisaurus",
    "Jensenosaurus",
    "Dandakosaurus",
    "Therosaurus",
    "Sarahsaurus",
    "Hypselorhachis",
    "Archaeodontosaurus",
    "Gresslyosaurus",
    "Stenopelix"
];