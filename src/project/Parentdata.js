import { createContext, useState } from "react"

   export const dataRoom =createContext()

    
export default function Parentdata (props){
    const[ourData,setOurData]= useState([

        {
            ID:0,
            dataImage1:"https://scitechdaily.com/images/Futuristic-Computer-Data-Center-Art-777x518.jpg?ezimgfmt=ngcb2/notWebP",
            dataImage2:"https://www.madmass.it/wp-content/uploads/2021/03/300-ant-1068x601.jpg",
            dataImage3:"http://content.health.harvard.edu/wp-content/uploads/2023/04/2e2e8c11-3d72-43b5-b737-a669b7959eb2.jpg"
        },
        {
            ID:1,
            Type:"Bollywood",
            dataName:"jawan",
            dataTitle :"'Jawan' review and release Highlights: SRK-Atlee film packs a punch",
            dataImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khans-jawan-finally-released-today--september-7-073507589-16x9.jpg?VersionId=Dl7g_529_KBgA8OU4AxGh8Fl8J2Cc0rP",
            description:"'Jawan', the much-awaited Shah Rukh Khan-starrer has finally hit cinemas today, on September 7. Directed by Atlee, the film features SRK in the lead role. Fans flocked to theatres for early morning screenings and extended a warm welcome to SRK on the big screen by bursting crackers and dancing outside cinema halls. From Kashmir, Jaipur, Kolkata to Chennai, and Hyderabad, SRK fans are celebrating September 7 as SRK Day. We bring you live updates from the film here.",

    },
    {
        ID:2,
        Type:"Bollywood",
        dataName:" Gadar2",
        dataTitle:"‘Gadar 2’ Movie Review: Sunny Deol’s High-Decibel Drama Serves Old Wine In A New Bottle",
        dataImage:"https://tse1.mm.bing.net/th?id=OIP.jAQb4rR78v5oa-n4NWfYAwHaEK&pid=Api&P=0&h=180",
        description:"Sunny Deol, Ameesha Patel and Utkarsh Sharma are back with another instalment of the ‘Gadar’ saga. Is the film worth the wait? Or can you simply skip it? Read the full movie review to find out",
    },
   
    {
        //about Bollywood
        ID:3,
        Type:"Bollywood",
        dataTitle:"Kartik Aaryan drops heartwarming PIC from Raksha Bandhan celebrations with sister Kritika, Katori; it's adorbs",
        dataImage:"https://www.pinkvilla.com/images/2023-08/1935131156_kartik-aaryan.jpg",
        description:"Kartik Aaryan drops heartwarming PIC from Raksha Bandhan celebrations with sister Kritika, Katori; it's adorbs",
    },
    {
        ID:4,
        Type:"Bollywood",
        dataName:"Aashiki 3",
        dataTitle:"Here's when Kartik Aaryan and Anurag Basu will commence Aashiqui 3 shoot; details inside",
        dataImage:"https://www.pinkvilla.com/images/2023-09/2050924139_kartik-aaryan.jpg",
        description:"Kartik Aaryan is all set to feature in Aashiki 3. it is one of the awaited films of him. The latest development reveals exciting details about it. Read on.",
    },
    {
        ID:5,
        Type:"Bollywood",
        dataName:"‘King Of Kotha’ ",
        dataTitle:"‘King Of Kotha’ (2023) Ending Explained & Movie Summary: Did Raju Get Rid Of Kannan?",
        dataImage:"https://fugitives.com/wp-content/uploads/2023/08/King-of-Kotha-Recap-And-Ending-Explained-Raju-696x391.jpg",
        description:"King of Kotha begins with a voiceover that speaks about the history of the town named Kotha. Set in the year 1996, the dreary town of Kotha receives CI Shahul Hasan, who has been sent here to control the law-and-order situation.",
    },
    {
        ID:6,
        Type:"Bollywood",
        dataName:"OMG 2",
        dataTitle:"‘OMG 2’ (2023) Ending, Explained & Movie Summary: Does Kanti Sharan Win The Case For Vivek?",
        dataImage:"https://tse1.mm.bing.net/th?id=OIP.H-tRinuhZV0raJqK7kImnQHaEK&pid=Api&P=0&h=180",
        description:"The first film, OMG – Oh My God, which released in 2012, a time when the situation wasn’t quite that volatile in our country, managed to be objective and question the commercialization of religion and godmen and how religion sells like hot cakes. ",
    },
    // {

    //     //Actress
    //     ID:7,
    //     Type:"Bollywood",
    //     dataImage:"https://www.filmibeat.com/imgm/275x433x100/2023/09/sanjana-sanghi_169414998500.jpg",
    //     dataTitle:"Sanjana Sanghi",
    //     description:"The first film, OMG – Oh My God, which released in 2012, a time when the situation wasn’t "
    // },
    {
       ID:8,
        Type:"Bollywood",
        dataName:"Dream girl2",
        dataTitle:"Dream Girl 2 Review: Tring Tring ! Ayushmann Khurrana’s Pooja is worth a dial",
        description:"Ayushmann Khurrana is why you will go to watch 'Dream Girl 2' in the first place and he doesn’t disappoint. Here's our review.",
        dataImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/ayushmann-khurrana-in-dream-girl-2-254006-16x9.jpg?VersionId=rJ1A153Cr3IwTVLzupe5NFVGm4S9KPLh&size=690:388"
    },
    // {
    //     ID:9,
    //     Type:"Bollywood",
    //     dataImage:"https://www.filmibeat.com/imgm/275x433x100/2023/09/kangna-sharma_169406050820.jpg",
    //     dataTitle:"Kangna Sharma",
    //     description:"Kartik Aaryan drops heartwarming PIC from Raksha Bandhan celebrations with sister Kritika, Katori; it's adorbs",
    // },
    {
        ID:10,
        Type:"Bollywood",
        dataImage:"https://www.filmibeat.com/imgm/275x433x100/2023/09/amyra-dastur_169405979320.jpg",
        dataTitle:"Amyra Dastur",
        description:"Kartik Aaryan drops heartwarming PIC from Raksha Bandhan celebrations with sister Kritika, Katori; it's adorbs",
    },
    {
        ID:11,
        Type:"Bollywood",

        description:"Haddi is a 2022 Bollywood drama movie, written and directed by Akshat Ajay Sharma. The movie Haddi stars Nawazuddin Siddiqui in the lead role. Plot: Haddi is a crime-thriller movie that portrays the life of a transgender and how she steps into the world of crime.Budget:Haddi was made with a budget of 100 crores.",
        dataImage:"https://tse2.mm.bing.net/th?id=OIP.tlthZipOpPmZHlJoO3A9gAHaEg&pid=Api&P=0&h=180"
    },
    {
        //upcomming movies
            ID:12,
            Type:"Bollywood",
            dataTitle:"Bambai Meri jaan Story",
            description:"Bambai Meri jaan is an Action Bollywood movie directed by Shujaat Saudagar.",
            dataImage:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/bambai-meri-jaan-20230904143706-22086.jpg"
        
    },
    {
        ID:13,
        Type:"Bollywood",
        dataTitle:" Luv You Shankar Story",
        description:"Luv You shankar, directed by Rajiv S.Ruia and produced by Sunita Desai",
        dataImage:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/luvyoushankar-20210313125639-19977.jpg"
    },
    {
        ID:14,
        Type:"Bollywood",
        dataTitle:"Brahmastra 2 Story",
        description:"Brahmastra 2 is a sequel to Brahmastra 1, directing by Ayan Mukerji.",
        dataImage:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/brahmastra2-20220718160537-21141.jpg"
    },
    
    // {
        
    //         ID:15,
    //         Type:"Bollywood",
    //         dataImage:"https://www.filmibeat.com/imgm/275x433x100/2023/09/dream-girl-2-success-bash_169403589000.jpeg",
    //         dataTitle:"Dream girl 2 Sucess Bash",
    //         description:"Kartik Aaryan drops heartwarming PIC from Raksha Bandhan celebrations with sister Kritika, Katori; it's adorbs",
        
    // },
    {
        ID:16 ,
        Type:"Hollywood",
        dataName:"Oppenheimer (film)",
        dataTitle:"Who is Oppenheimer",
        description:"Oppenheimer is a 2023 epic biographical thriller film written and dircted by Christopher Nolan. Based on the 2005 biograpphy American Prometheus by Kai Bird and Martine J. Sherwin, the film chronicles the carrer of American theoretical physicist J. Robert Oppenhemier .The story predominantly focuses on Oppenheimer's studios, his direction of the Manhattan Project during World War||, and his eventual fall from grace due to his 1954 security hearing. The fillm stars Cillian Murphy as the tittle character, Emily Blunt as his wife Kitty.",
        dataImage:"https://www.oppenheimermovie.com/meta/meta-v3-en_US.jpg"
    },
   
    {
        ID:17 ,
        Type:"Hollywood",
        dataName:"Barbie",
        dataTitle:"‘Barbie’ Review: Out of the Box and On the Road",
        description:"She’s in the driver’s seat, headed for uncharted territory (flat feet!). But there are limits to how much dimension even Greta Gerwig can give this branded material Can a doll with an ingratiating smile, impossible curves and boobs ready for liftoff be a feminist icon? That’s a question that swirls through Greta Gerwig’s “Barbie,” a live-action, you-go-girl fantasia about the world’s most famous doll. For more than half a century, Barbie has been, by turns, celebrated as a font of girlhood pleasure and play, and rebuked as an instrument of toxic gender norms and consumerist ideals of femininity. ",
        dataImage:"https://static01.nyt.com/images/2023/07/20/multimedia/18barbie-review-ftwc/18barbie-review-ftwc-superJumbo.jpg?quality=75&auto=webp"
    },
    {
        ID:18 ,
        Type:"Hollywood",
        dataName:"Avengers: Endgame",
        dataTitle:"## Marvel",
        description:"The less you know going into Avengers: Endgame, the more you’re likely to enjoy it. Obviously, you wouldn’t have clicked on a review of this movie if you didn’t want to know something about the culmination of a decade’s worth of Marvel’s superhero storytelling, but trust me: more than Avengers: Infinity War, more than any Star Wars movie, Endgame is truly a story that needs to be experienced. Forget all the external noise from the deliberately vague teaser trailers, perfectly-calibrated celebrity soundbites, and footage leaks, and just strap in for the ride",
        dataImage:"https://sm.ign.com/t/ign_in/review/a/avengers-e/avengers-endgame-review_v9e6.1024.jpg"
    },
    // {
    //     ID:19 ,
    //     Type:"Hollywood",
    //     dataName:"MEG 2",
    //     dataTitle:"MEG 2 The Trench",
    //     description:"Get ready for the ultimate adrenaline rush this summer in  a literally larger-than-life thrill ride that supersizes the 2018 blockbuster and takes the action to higher heights and even greater depths with multiple massive Megs and so much more! Dive into uncharted waters with Jason Statham and global action icon Wu Jing as they lead a daring research team on an exploratory dive into the deepest depths of the ocean. Their voyage spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    //     dataImage:"https://tse3.mm.bing.net/th?id=OIP.ME3Lc1UdRFUS1PrU3dG3-gHaEK&pid=Api&P=0&h=180"
    // },
    {
        ID:20,
        Type:"Hollywood",
        dataName:"Mission: Impossible – Fallout",
        dataTitle:"Mission: Impossible – Fallout review – Cruise control and set-piece thrills",
        description:"In the 22 years since the original Mission: Impossible, Tom Cruise’s Ethan Hunt remains the same, moral compass and handsome, suspiciously unlined face very much intact. Hunt’s slick stunts created a new template for the spy thriller’s action man hero, but what sets him apart from his grittier contemporaries is his American altruism. Bond is misanthropic, Bourne solipsistic, John Wick (though a vigilante hitman, not a hero) spurred by revenge. Hunt, on the other hand, is defined by his “pathetic morality”, a weakness parlayed in this sixth instalment into something worth celebrating. Cleanly choreographed set pieces see the 56-year-old Cruise bungee-jumping into the eye of a lightning storm, swishing through a Parisian club, swinging through the bowels of London’s ",
        dataImage:"https://tse1.mm.bing.net/th?id=OIP.dp5luUQlYoU4HEWb4jGUOQHaD4&pid=Api&P=0&h=180"
    },
    {
        ID:21,
        Type:"Hollywood",
        dataName:"THE FLASH",
        dataTitle:"NEWS & INTERVIEWS FOR THE FLASH",
        description:"Worlds collide in The Flash when Barry uses his superpowers to travel back in time in order to change the events of the past. But when his attempt to save his family inadvertently alters the future, Barry becomes trapped in a reality in which General Zod has returned, threatening annihilation, and there are no Super Heroes to turn to. That is, unless Barry can coax a very different Batman out of retirement and rescue an imprisoned Kryptonian... albeit not the one he's looking for. Ultimately, to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        dataImage:"https://images7.alphacoders.com/109/thumb-1920-1094699.jpg"
    },
    {
        ID:22,
        Type:"Hollywood",
        dataName:"The Nun II",
        dataTitle:"The Nun II review: Creature of habit is back for more",
        description:"When the habit-wearing demon of the title actually shows up onscreen, The Nun|| briefly becomes entertaining, if not quite coherent, as her power set appears near-infinite. Hitching a ride across Europe inside the body of a French groundskeeper named Maurice (a returning Jonas Bloquet), she’s by no means corporeally confined, breaking free with some regularity to strangle children and set priests on fire, while sending scary visions across hundreds of miles to her returning arch-nemesis, Sister Irene (Taissa Farmiga).",
        dataImage:"https://tse2.mm.bing.net/th?id=OIP.FGQ4zo6eJo7cEWxlUQxfTAHaDz&pid=Api&P=0&h=180"
    },
    {
        ID:23,
        Type:"Hollywood",
        dataName:"No Hard Feelings",
        dataTitle:"Did you know",
        description:"On the brink of losing her childhood home, Maddie (Jennifer Lawrence) discovers an intriguing job listing: wealthy helicopter parents looking for someone to date their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
        dataImage:"https://tse2.mm.bing.net/th?id=OIP.rzF-AI7hTTf25KvcS0tRcgHaEK&pid=Api&P=0&h=180"
    },
    
    
    {
        ID:26,
        Type:"Hollywood",
        dataName:"THE EXPENDABLES 3",
        dataTitle:"'Expendable' Indeed: The Best Of A Bad Bunch Is Still Pretty Bad",
        description:"The third installment in Sylvester Stallone's jobs program for expired action heroes is easily the best of the bunch, which is not to say it's any good. The Expendables series -- basically what we'd get if Marvel released Iron Man, Thor and Captain America and then sat on The Avengers for 25 years or so — aims low and somehow still manages to underwhelm. Its latest iteration is best appreciated as the rich library of GIFs it seems destined to become. Arnold Schwarzenegger, sporting an impressive array of loud shirts, an Oh God Don't Sneak Up on Me Like That haircut, and the estimable movie name Trench Mauser, emerges as the most GIFable of this swollen-necked band of brothers.",
        dataImage:"https://media.npr.org/assets/img/2014/08/14/the-expendables-3---final-one-sheet_custom-441d5ac7a0c7373da8171fcd39051c6f7634ca00-s900-c85.webp"
    },
    {

        //About actress 
        ID:27 ,
        Type:"Hollywood",
        dataName:"Selena Gomez",
        dataTitle:"Selena Gomez Rebels Against the ‘Big Pants, Tiny Top’ Fashion Rule in Enormous Wide-Leg Jeans",
        description:"Selena Marie Gomez (/ səˈliːnə ˈɡoʊmɛz / sə-LEE-nə GOH-mez; born July 22, 1992) is an American singer, actress and producer. Regarded as one of the most influential figures in contemporary popular culture, she is known for her whisper-like vocals and extensive work across film and television.",
        dataImage:"https://tse4.mm.bing.net/th?id=OIP.viKmzUQAOFJF1iV1F3Dq-AHaDt&pid=Api&P=0&h=180"
    },
   
    {
        ID:29 ,
        Type:"Hollywood",
        dataName:" Emma Stone",
        dataTitle:"The gorgeous Emma Stone is one of the top Hollywood actresses in 2023",
        description:"The gorgeous Emma Stone is one of the top Hollywood actresses in 2023, and Time magazine named her in the “100 most influential people in the world”, and also appeared in Forbes celebrity 100 in 2013 and 2017.",
        dataImage:"https://blogkart.com/wp-content/uploads/2020/06/emma-stone.jpg"
    },
    {
        ID: 30 ,
        Type:"Hollywood",
        dataName:"Scarlett Johansson",
        dataTitle:"Mini Bio",
        description:"Scarlett Johansson is one of the finest actors we have in the film industry, and for her outstanding works, she is the recipient of numerous accolades, including a BAFTA, Gotham Independent Award, etc. She has appeared in top-grossing movies such as Iron Man 2, Lucy, Captain America: The Winter Soldier, Avengers series, Ghost in the Shell, Black Widow.",
        dataImage:"https://blogkart.com/wp-content/uploads/2020/06/scarlett-johansson-top-hollywood-actress.jpg"
    },
    {
        ID:31,
        Type:"Hollywood",
        dataName:"John Wick 4",
        dataTitle:"John Wick: Chapter 4 - Keanu Reeves film lands franchise's best reviews",
        description:"The second and third films both scored 89%, while 2014's original got 86%.The second and third films both scored 89%, while 2014's original got 86%. The film, which comes out on Friday, sees Wick being pursued by global criminal organisation the High Table.",
        dataImage:"https://tse1.mm.bing.net/th?id=OIP.1ppWCPOqVq_kn5yiKFDs7QHaEo&pid=Api&P=0&h=180"
    },
    {
        ID:32,
        Type:"Hollywood",
        dataName:"300",
        dataTitle:"Spartan Special at CGI Friday's ,Keanu Reeves film lands franchise's best reviews .",
        description:"The movie involves a legendary last stand by 300 death-obsessed Spartans against a teeming horde of Persians. So brave and strong are the Spartans that they skewer, eviscerate, behead and otherwise inconvenience tens of thousands of Persians before finally falling to the weight of overwhelming numbers. The lesson is that the Spartans are free, and the Persians are slaves, although the Spartan idea of freedom is not appetizing (children are beaten to toughen them).",
        dataImage:"https://www.madmass.it/wp-content/uploads/2021/03/300-ant-1068x601.jpg"
    },
    // {
    //     ID:33,
    //     Type:"Technology",
    //     dataImage:"https://assets.weforum.org/article/image/responsive_big_webp_DK4xwZxygHcCKz_UYFNinko83yx5uNFF1F8m-Ohkw3s.webp",
    //     description:"The military has been using drones for decades. These drones have been used to spy on enemies, deliver supplies, and even carry bombs. You may have seen them in the news or at an air show, but do you know what they really are and how they work? If not, we’re here to help by answering all your questions about military drones and their technology.",
    // },
    {
        ID:34,
        Type:"Technology",
        dataName:"Military Drones",
        dataTitle:"Types of Military Drones: Best Technology Available Today",
        description:"The military has been using drones for decades. These drones have been used to spy on enemies, deliver supplies, and even carry bombs. You may have seen them in the news or at an air show, but do you know what they really are and how they work? If not, we’re here to help by answering all your questions about military drones and their technology.",
        dataImage:"https://www.dronetechplanet.com/wp-content/uploads/2019/02/Webp.net-resizeimage-8-768x485.jpg?ezimgfmt=ng:webp/ngcb4",
        moviTitle:"Indian made drone",
        dataImage:"https://www.thedefensepost.com/wp-content/uploads/2022/07/FWkKSDuakAEAis_.jpg"
    },
    
    {
        ID:35,
        Type:"Technology",
        dataTitle:" Development of an atomic clock has made ISRO one of the few space organisations in the world to have gained this sophisticated technology.",
        dataImage:"https://wp.scoopwhoop.com/wp-content/uploads/2018/05/5af3f6c1fb778527bdcac2dc_f0a11d70-316a-4064-82d0-53f0386511d0.jpg",
        description:"ISRO has developed an atomic clock that will be used in navigation satellites to measure precise location data. The space agency currently imports atomic clocks from European aerospace manufacturer Astrium. "
      
    },
    {
        ID:36,
        Type:"Technology",
        dataTitle:"A team of Indian astronomers has discovered an extremely large supercluster of galaxies.",
        dataImage:"https://wp.scoopwhoop.com/wp-content/uploads/2018/05/5af3f6c1fb778527bdcac2dc_650de546-0a15-43e3-b34a-664f286fdf64.jpg",
        description:"This is one of the largest known structures in the neighbourhood of the universe – as big as 20 million billion suns. It is a path-breaking discovery and the cluster has been named ‘Saraswati’.",

    },
   
    {
        ID:37,
        Type:"Technology",
        dataTitle:"ISRO demonstrated its capability of handling complex missions by successfully launching a record 104 satellites on a single rocket.",
        dataImage:"https://wp.scoopwhoop.com/wp-content/uploads/2018/05/5af3f6c1fb778527bdcac2dc_d153558f-1dcf-48e0-a14a-ad3bcb75672f.jpg",
        description:"This is the highest number of satellites ever launched in a single mission by any other country in the world.",
    },
    {
        ID:38,
        Type:"Technology",
        dataTitle:"PARAM – India’s first ever indigenous supercomputer was a major milestone in modern India’s technological journey. ",
        dataImage:"https://wp.scoopwhoop.com/wp-content/uploads/2018/05/5af3f6c1fb778527bdcac2dc_80d6af31-e6aa-449d-ac44-4bb5dff50316.jpg",
        description:"India faced a technology-denial regime in the 80s. It was then that the Centre for Development of Advanced Computing (C-DAC) was set up with the clear mandate to develop an indigenous supercomputer to meet high-speed computational needs.",
    },

    {
        ID:39,
        Type:"Technology",
        dataTitle:"DNA Chips: The Billion Gigabyte Storage Solution of Tomorrow",
        dataImage:"https://scitechdaily.com/images/DNA-Chip-Art-Illustration.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1",
        description:"Researchers have been focusing on the potential of DNA as a data storage medium due to its capacity to store vast amounts of information in a minuscule space the hereditary molecule DNA is renowned for its ability to store vast amounts of information over long periods of time in an incredibly small space. For a good ten years, scientists have therefore been pursuing the goal of developing DNA chips for computer technology, especially for the long-term archiving of data. Such chips would be superior to conventional silicon-based chips in terms of storage density, longevity, and sustainability.",
    },
    {
        ID:40,
        Type:"Technology",
        dataTitle:"Atomic-Scale Spin-Optical Laser: Pioneering the Future of Optoelectronic Devices",
        dataImage:"https://scitechdaily.com/images/Spin-Valley-Rashba-Monolayer-Laser-777x1004.jpg?ezimgfmt=ngcb2/notWebP",
        description:"The spin-valley optical microcavity is constructed by interfacing an inversion-asymmetric (yellow core region) and an inversion-symmetric (cyan cladding region) photonic spin lattice. By virtue of a photonic Rashba-type spin splitting of a bound state in the continuum, this heterostructure enables a selective lateral confinement of the emergent photonic spin-valley states inside the core for high-Q resonances. Consequently, the coherent and controllable spin-polarized lasing (red and blue beams) is achieved from valley excitons in an incorporated WS2 monolayer (purple region). Credit: Scholardesigner co, LTD",
    },
    {
        ID:41,
        Type:"Technology",
        dataTitle:"More Than Just Storing Electricity: Scientists Develop Dual-Use Rechargeable Battery",
        dataImage:"https://scitechdaily.com/images/Potassium-Metal-Battery-Illustration-777x518.jpg?ezimgfmt=ngcb2/notWebP",
        description:"Researchers from Tsinghua University have developed a hybrid battery that not only stores and supplies electricity but also produces valuable chemicals like furfuryl alcohol and furoic acid. The dual-use system combines features of rechargeable and redox flow batteries, using specialized catalysts to transform biomass-derived furfural into useful chemicals while the battery charges or discharges.",
    },
    {
        ID:42,
        Type:"Technology",
        dataTitle:"Turbocharged Python: AI Accelerates Computing Speed by Thousands of Times",
        dataImage:"https://scitechdaily.com/images/Futuristic-Computer-Data-Center-Art-777x518.jpg?ezimgfmt=ngcb2/notWebP",
        description:"Researchers from the University of Massachusetts Amherst introduced Scalene, a cutting-edge Python profiler. Unlike traditional profilers, Scalene uses AI to both identify and suggest fixes for code inefficiencies. This development gains significance as the future leans towards better programming for speed improvements.",
    },
    {
        ID:43,
        Type:"Technology",
         dataTitle:"“Truly Mind-Boggling” Breakthrough: Graphene Surprise Could Help Generate Hydrogen Cheaply and Sustainably",
         dataImage:"https://scitechdaily.com/images/Graphene-Water-Hydrogen-Concept-Art-777x518.jpg?ezimgfmt=ng:webp/ngcb2",
        description:"Scientists have now proven that graphene is naturally permeable to protons. Using a technique called scanning electrochemical cell microscopy, they observed that protons not only move through the graphene crystal but also accelerate around its nanoscale wrinkles. This discovery, which defies previous theories, holds significant potential for advancing the hydrogen economy by replacing costly and environmentally harmful catalysts and membranes with sustainable 2D crystals.",
    },
    {
        ID:44,
        Type:"Technology",
        dataTitle:"Superior Strength and Plasticity – A New Treatment for Steel Alloys",
        dataImage:"https://scitechdaily.com/images/Steel-Pipes-777x518.jpg?ezimgfmt=ngcb2/notWebP",
        description:"A new treatment tested on a high-quality steel alloy results in remarkable strength and flexibility, qualities often seen as a trade-off rather than a combination. Ultra-fine metal grains that the treatment produced in the outermost layer of steel appear to stretch, rotate and then elongate under strain, conferring super-plasticity in a way that Purdue University researchers cannot fully explain.",
    },
    {
        ID:45,
        Type:"Technology",
        dataTitle:"Chilling Breakthrough: The Science Behind a Real-Life “Freeze Ray” Technology for the Air Force",
        dataImage:"https://scitechdaily.com/images/Freeze-Ray-Air-Force-Concept.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1",
        description:"Professor Patrick Hopkins of the University of Virginia is developing a freeze-ray device to cool electronics in spacecraft and high-altitude jets. The technology is based on plasma, which surprisingly cools surfaces before heating them. With a $750,000 grant from the U.S. Air Force, the team is exploring ways to amplify and prolong this cooling effect. (Artist’s concept.)",
    },
    // {
    //     ID:46,
    //     Type:"Technology",
    //     dataTitle:"Quantum Leaps Ahead: IBM’s Error Mitigation Strategy Outperforms Classical Supercomputers",
    //     dataImage:"https://scitechdaily.com/images/IBM-Eagle-Quantum-Computer-777x777.jpg?ezimgfmt=ngcb2/notWebP",
    //     description:"An interior view of the cryostat that cools the IBM Eagle, a utility-scale quantum processor containing 127 qubits. Utility scale is a point at which quantum computers could serve as a scientific tool to explore a new scale of problems that classical methods may not be able to solve. Credit: IBM Research Despite steady improvements in quantum computers, they’re still noisy and error-prone, leading to questionable or incorrect results. Scientists project that they won’t truly outcompete today’s “classical” supercomputers for at least five or 10 years, until researchers can adequately correct the errors that afflict entangled quantum bits, or qubits.",
    // },
    {
        ID:47,
        Type:"Technology",
        dataTitle:"Triboelectric Nanogenerator – New Technology Successfully Harvests Electricity From Raindrops",
        dataImage:"https://scitechdaily.com/images/Graphic-Showing-Solar-Panel-Like-D-TENGs.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1",
        description:"When droplets of rain descend from the clouds, they generate a small amount of energy that can be captured and converted into electricity. This process can be seen as a miniaturized form of hydropower, which employs the kinetic force of moving water to generate electricity. Several researchers have suggested that the energy gathered from falling rain could serve as a viable source of sustainable, clean energy. However, expanding this technology on a broader scale has proven challenging, thereby limiting its practical utilization.",
    },
    {
        ID:48,
        Type:"Technology",
        dataTitle:"New Technology Restores Cold Sensation in Amputees’ Phantom Limbs",
        dataImage:"https://scitechdaily.com/images/Black-Prosthetic-Arm-777x518.jpg?ezimgfmt=ngcb2/notWebP",
        description:"Researchers have developed the thin-film thermoelectric cooler (TFTEC), one of the world’s smallest and fastest refrigeration devices, for applications like improved prosthetics and augmented reality. Collaboration with neuroscientists has allowed amputees to perceive temperature with phantom limbs, a first-of-its-kind advancement that has implications for prostheses, haptics, and other applications like cooling electronics and energy harvesting in satellites. (Artist’s Concept)",
    },
    // {
    //     ID:49,
    //     Type:"Technology",
    //     dataTitle:"Tiny Surgical Robots With Magnetic Tentacles Could Transform the Treatment of Cancers",
    //     dataImage:"https://scitechdaily.com/images/Robotic-Platform-for-Peripheral-Lung-Tumor-Intervention-Based-on-Magnetic-Tentacles-777x437.jpg?ezimgfmt=ngcb2/notWebP",
    //     description:"Lung cancer has the highest worldwide cancer mortality rate. In early-stage non-small cell lung cancer, which accounts for around 84% of cases, surgical intervention is the standard of care. However, this is typically highly invasive and leads to the significant removal of tissue. This approach is not suitable for all patients and can have an impact on lung function. The report’s co-author, Dr Giovanni Pittiglio, who carried out the research while conducting his PHD at the University of Leeds’s School of Electronic and Electrical Engineering, added: “Our goal was, and is, to bring curative aid with minimal pain for the patient.",
    // },
    {
        ID:50,
        Type:"Technology",
        dataTitle:"NASA’s Laser Communications Relay: Showcasing the Future of Space Data Transmission",
        dataImage:"https://scitechdaily.com/images/NASA-Laser-Communications-Relay-Demonstration.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1",
        description:"Illustration of NASA’s Laser Communications Relay Demonstration (LCRD communicating with the International Space Station over laser links. LCRD has successfully completed its first year of experiments, offering a glimpse into the future of data transmission from space. The system uses infrared light, allowing for 10 to 100 times more data to be packed into a single transmission compared to traditional radio wave systems. Credit: NASA’s Goddard Space Flight Center",
    },

    {
        ID:51,
        Type:"Fitness",
        dataTitle:"Exercise may counteract inherited risk for diabetes",
        dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/14210/57d62fb2-1d4b-4818-bba5-8f69286c01ed.jpg",
        description:"Getting regular exercise can help fend off diabetes, even in people with a genetic propensity for the disease, a new study finds. The study included more than 59,000 people who wore activity trackers on their wrists for a week. All were part of the UK Biobank, a large database of genetic, lifestyle, and health information from more than a half-million people in the United Kingdom. After a median follow-up of nearly seven years, researchers found that people who did more than an hour of moderate-to-vigorous physical activity daily had a 74% lower risk of developing diabetes compared with people who did less than five minutes of physical activity per day."
    },
    {
        ID:52,
        Type:"Fitness",
        dataTitle:"Try this: All aboard for paddleboarding",
        dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/14222/cf390277-d061-4bc2-94cf-f567975ed2c0.jpg",
        description:"Paddleboarding has surfaced as a popular water sport. You stand or kneel on a surfboard, and using a long paddle (eight inches more than your height), glide across the surface as if walking on water. There are many types of paddleboards. Soft-top boards are ideal for beginners, and inflatable ones are perfect for travel and easy storage."
    },
    {
        ID:53,
        Type:"Fitness",
        dataTitle:"Exercises to try in the pool right now",
        dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/14005/7b2073f7-b7e6-40b3-b846-a4a2b9af5ea1.jpg",
        description:"Pools are ideal spots for playing, cooling, and relaxing, and they're also great for exercising. Water resistance makes the heart and muscles work hard. Our buoyancy in water takes pressure off the joints, making movement less painful than it might be on land. And exercising in water always provides a soft landing if you lose your balance. Many people swim laps to take advantage of these benefits. You can also do a series of exercises as you would in a home workout routine."
    },
    // {
    //     ID:54,
    //     Type:"Fitness",
    //     dataTitle:"Try this: Build better biceps",
    //     dataImage:"http://content.health.harvard.edu/wp-content/uploads/2023/05/944b8686-9cfc-4de2-958a-8599b33beddb.jpg",
    //     description:"As a kid, showing muscle meant flexing your biceps. This mirror muscle (what man hasn't checked out his biceps in the bathroom?) is still important as you age. Strong biceps help with lifting, holding, and carrying heavy objects. The old-school curl is still the best exercise for building biceps. Use a pair of light dumbbells (about 10 pounds each). You also can use soup cans, full plastic water bottles, or any other easy-to-hold item that feels like an appropriate weight."
    // },
    {
        ID:55,
        Type:"Fitness",
        dataTitle:"Why eat lower on the seafood chain?",
        dataImage:"http://content.health.harvard.edu/wp-content/uploads/2023/04/4ade0e5e-cca2-4a8b-a7dc-f6068f194a76.jpg",
        description:"Those protein sources are better than beef, and not just because they're linked to a lower risk of heart disease, diabetes, and cancer. Chicken and fish are also better for the environment, as their production uses less land and other resources and generates fewer greenhouse gas emissions. And choosing seafood that's lower on the food chain — namely, small fish such as herring and sardines and bivalves such as clams and oysters — can amp up those benefits. "
    },
    {
        ID:56,
        Type:"Fitness",
        dataTitle:"Want a stronger core? Skip the sit-ups",
        dataImage:"http://content.health.harvard.edu/wp-content/uploads/2023/05/d2e376d4-88ce-4e78-b9b4-4478272973d4.jpg",
        description:"Sit-ups once ruled as the way to tighter abs and a slimmer waistline. While planks were merely flooring. Now plank exercises, in which you assume a position and hold it, are the gold standard for working your core. While classic sit-ups and crunches have fallen out of favor."
    },
    {
        ID:57,
        Type:"Fitness",
        dataTitle:"Taking up adaptive sports",
        dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13578/e77a02bf-5c6f-4c27-bb39-caa1e6d97d4d.jpg",
        description:"Regular exercise is a prescription for staying healthy and active as you age. But sometimes it’s not that easy. Many older adults face an injury, illness, health condition, or disability that makes activities difficult, if not seemingly impossible. If you are in this category, adaptive sports could be a welcome opportunity."
    },
    {
        ID:58,
        Type:"Fitness",
        dataTitle:"Adding yoga to aerobic exercise may help lower high blood pressure",
        dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13573/66c60680-18fd-46dd-af5e-15774aaefc2f.jpg",
        description:"Yoga can help increase flexibility and balance, but the ancient practice could have another benefit: helping to lower high blood pressure. Researchers recruited 60 people diagnosed with high blood pressure and metabolic syndrome, a cluster of conditions that raises the risk of heart problems and stroke. Participants were randomly divided into two groups. For three months, everyone did 30 minutes of aerobic exercise five days a week followed by either 15 minutes of yoga or 15 minutes of regular muscle stretching."
    },
    {
        ID:59,
        Type:"Fitness",
        dataTitle:"Winter hiking: Magical or miserable?",
        dataImage:"http://content.health.harvard.edu/wp-content/uploads/2023/04/2e2e8c11-3d72-43b5-b737-a669b7959eb2.jpg",
        description:"Winter backdrops are stark, serene, and often stunning. With fewer people on the trail, you may spot more creatures out and about. And it's a prime opportunity to engage with the seasons and our living planet around us, says Dr. Stuart Harris, chief of the Division of Wilderness Medicine at Massachusetts General Hospital. But a multi-mile trek through rough, frosty terrain is far different than warm-weather hiking, requiring consideration of health and safety, he notes. Here's what to know before you go."
    },
    {
        ID:60,
        Type:"Fitness",
        dataTitle:"Get a lift from body-weight workouts",
        dataImage:"http://content.health.harvard.edu/wp-content/uploads/2023/05/360caca5-e196-4078-8833-ec694aef9034.jpg",
        description:"Regular exercise doesn't always conform to your schedule or mood. Sometimes you're crunched for time. Sometimes your typical workout feels uninspired. Sometimes you just need a quick jolt to jump-start your day. Body-weight exercises are not only versatile — as you can do them anytime, anywhere, without any equipment — but they help improve everyday movements, says Shawn Pedicini, a physical therapist specializing in sports and orthopedic injuries with Harvard-affiliated Spaulding Rehabilitation Network."
    },
    {
        ID:61,
        Type:"Fitness",
        dataTitle:"Rethinking cardio exercise",
        dataImage:"http://content.health.harvard.edu/wp-content/uploads/2022/10/08792ae3-94fe-44c8-a716-ac2520251289.jpg",
        description:"Standard exercise guidelines call for at least 150 minutes per week of moderate-intensity aerobic exercise. But many people have trouble reaching this mark. They either don’t enjoy aerobic workouts or have physical or medical issues that make traditional cardio exercise a challenge, says Dr. Caroline Apovian, co-director of the Center for Weight Management and Wellness at Harvard-affiliated Brigham and Women’s Hospital. Then there is the additional barrier of thinking these requirements take too much time and effort. All this can intimidate people and keep them from getting their necessary exercise."
    },
    {
        ID:62,
        Type:"Fitness",
        dataTitle:"Another benefit of exercise Eye comfort",
        dataImage:"http://content.health.harvard.edu/wp-content/uploads/2023/07/336a0dbf-ab09-4b78-b460-8c1ed8dc8bcd.jpg",
        description:" In addition to many other health benefits, vigorous exercise may potentially help with dry, itchy eyes by boosting tear production and quality, a new study suggests. The study included 52 adults, whom investigators categorized as either athletes or non-­athletes. Participants in the athlete group exercised at least five times a week, while non-athletes exercised no more than once a week."
    },
    // {
    //     ID:63,
    //     Type:"Fitness",
    //     moviTitle:"Yoga for weight loss: Benefits beyond burning calories",
    //     dataImage:"http://content.health.harvard.edu/wp-content/uploads/2023/04/19599161-4eba-4ae7-a716-06cc3058f719.jpg",
    //     description:"If you have trouble losing weight despite your best efforts, this is because obesity is a complex disease with many causes. A family history of weight issues can make it more likely that you'll have the same issues managing your weight. A diet high in ultra-processed foods, sugar, and fat and being sedentary also contribute to weight gain. Stress and struggles with mental health, including medications to treat certain mental health conditions, poor sleep, and hormonal changes, are all factors that further contribute to weight gain."
    // },
    {
        ID:64,
        Type:"Fitness",
        dataTitle:"Working out your brain",
        dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/11952/073897e4-d693-42ab-ab56-0f743a1a6c4e.jpg",
        description:"Cardiovascular exercise, which gets the heart pumping, the muscles moving, and the sweat glands working, is one of the best medicines for overall health. And what’s good for the body also benefits the brain. There is no surefire medical tool that can delay the onset of dementia and other memory problems, says Dr. Julie Brody Magid, Clinical Director of the Memory Disorders Assessment Clinic at Harvard-affiliated McLean Hospital.There is no surefire medical tool that can delay the onset of dementia and other memory problems, says Dr. Julie Brody Magid, Clinical Director of the Memory Disorders Assessment Clinic at Harvard-affiliated McLean Hospital."
    },
    {
        ID:65,
        Type:"Fitness",
        dataTitle:"5 Ways to Strengthen Your Upper Body",
        dataImage:"https://www.verywellfit.com/thmb/UVCg9_F3F7mhEmcJIu-xZ5KlWXs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1270125743-15a60bc21b9d43f091f3c2efc8a5256e.jpg",
        description:"Upper body strength is essential for daily living and overall quality of life. Building strength is different from muscle growth (hypertrophy) and is more focused on function rather than appearance. To build a better functioning overall body, you have to work all the muscle groups. For this reason, you may perform different types of exercises and curate your resistance traing program to encourage strength gains. Although you may build muscle size with strength training programs, strength training is focused on increasing the amount of weight you can lift. These exercises and program designs are unique from specific hypertrophy programs."
    },
    // {
    //     ID:66,
    //     Type:"Fitness",
    //     dataTitle:"Plant-based diet quality linked to lower stroke risk",
    //     dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/10746/91be405a-26de-4e52-8913-a52bba8c692a.jpg",
    //     description:"Plant-based diets not only ward off heart disease; they also can ward off strokes. But it depends on the quality of the diet. A Harvard study published online March 10, 2021, by the journal Neurology evaluated the self-reported health data of about 210,000 healthy men and women who periodically answered diet questionnaires over 25 years. Compared with people who ate unhealthy plant-based foods (such as white bread, pizza, potatoes, and foods with added sugar), people who ate healthy plant-based foods (leafy greens, whole grains, and beans) had up to a 10% reduction in stroke risk, especially ischemic strokes, which, like heart attacks, are caused by a blockage of blood flow."
    // },
    {
        ID:67,
        Type:"Fitness",
        dataTitle:"The powerful play of pickleball",
        dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/6452/d277b98c-0303-4053-8a34-d159561543b8.jpg",
        description:"You keep hearing that older adults need to stay active physically, mentally, and socially. But what if you could do all three at once? You can if you play the racquet sport pickleball, one of the country's fastest-growing forms of recreation."
    },
    {
        ID:68,
        Type:"Fitness",
        dataTitle:"Resistance training by numbers",
        dataImage:"https://domf5oio6qrcr.cloudfront.net/medialibrary/6400/58a5fb4f-9968-41cb-99f4-d63407c046f8.jpg",
        description:"Old-fashioned resistance training — lifting heavy weights multiple times — is the best way for men to slow and even reverse age-related muscle loss, known as sarcopenia. It can also increase your strength, protect against falls, and help you live a more independent life.Resistance training (also known as strength training) consists of doing upper- and lower-body exercises using free weights (like dumbbells, kettlebells, or barbells), weight machines, resistance bands, or just your own body weight."
    },
 
   
   
    
    // {
    //     ID:72,
    //     Type:"Food",
    //     dataTitle:"Cheese Pizza Homemade",
    //     dataImage:"https://www.indianfoodforever.com/iffwd/wp-content/uploads/cheese-pizza-at-home.jpg",
    //     description:"Every one loves cheese pizza. Here is quick and easy cheese pizza recipe. These cheese pizza can be made into small size and they can act as a good party starter. They are a hit at all birthday parties at our home. Make small size for every individual. Kids just love it. You can add as much cheese as you desire and make extra cheesy.The aroma of freshly baked pizza is simply out of this world."
    // },
    {
        ID:73,
        Type:"Food",
        moviname:"",
        dataTitle:"Popeyes Chicken Sandwich",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2018/02/hardees-original-thickburger-yelp.jpg?resize=800,586&quality=82&strip=all",
        description:"If you haven't tried the Popeyes chicken sandwich, what are you waiting for? There's a reason it became an instant classic among fast-food fans—it's worth the hype.",
    },
    {
        ID:74,
        Type:"Food",
        dataTitle:"Chick-fil-A Waffle Fries",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/chick-fil-a-fries-drink.jpg?resize=800,586&quality=82&strip=all",
        description:"If you've stopped by Chick-fil-A for fries without getting a sandwich, you're in good company. According to the Chicken Wire, Chick-fil-A's blog, waffle fries were the most popular item in 2018. Love fries? We Tasted the Fries at 7 Major Fast-Food Chains. This Was the Clear Winner."

    },
    {
        ID:75,
        Type:"Food",
        dataTitle:"Papa John's Pepperoni Pizza",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/papa-john-pepperoni-pizza.jpg?resize=800,586&quality=82&strip=all",
        description:"A rep for the pizza chain confirmed that pepperoni pizza is its most popular item.Prefer to eat somewhere local? This Is the Best Slice of Pizza in Every State.",
    },
    {
        ID:76,
        Type:"Food",
        dataTitle:"Kilwin's Mint Chocolate Chip Ice Cream",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/kilwins-mint-chocolate-chip-ice-cream.jpg?resize=800,585&quality=82&strip=all",
        description:"A Kilwin's rep provided us with a list of its most popular ice cream flavors, with mint chocolate chip making one of the top cuts. Other popular flavors included toasted coconut, sea salt caramel, cookies and cream, and chocolate chip cookie dough. And, of course, chocolate and vanilla are on the best-seller list, too.",
    },
    {
        ID:77,
        Type:"Food",
        dataTitle:"Raising Cane's Chicken Fingers",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2018/09/caniac-meal-raising-canes.jpg?resize=800,586&quality=82&strip=all",
        description:"Raising Cane's doesn't have a huge menu, so it's no surprise that these crunchy chicken pieces are a top seller at the chain.Love chicken? We Tested 10 Fast Food Chicken Sandwiches, and This is the Best!",
    },
    {
        ID:78,
        Type:"Food",
        dataTitle:"Zaxby's Chicken Finger Plate",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/zaxbys-chicken-finger-plate-buffalo.jpg?resize=800,586&quality=82&strip=all",
        description:"Zaxby's Chicken Finger Plate—both in Original and Buffalo Chicken—is listed as one of its most-ordered items on the company's website."
    },
    {
        ID:79,
        Type:"Food",
        dataTitle:"	Church's Chicken Honey Butter Biscuits",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/churchs-chicken-honey-butter-biscuits.jpg?resize=800,585&quality=82&strip=all",
        description:"Church's Chicken has two clear menu stars: the Hand-Battered Fried Chicken and the Honey Butter Biscuits. The biscuits break the tie for inspiring the most at-home recreations of the recipe.",
    },
    {
        ID:80,
        Type:"Food",
        dataTitle:"Paya Soup, sip & slurp of flavors",
         dataImage:"https://www.thrillophilia.com/blog/wp-content/uploads/2015/05/Paya-soup-1170x618.jpg",
        description:"When it comes to Non-Vegetarian street feast, then head straight to Chatori Gali while in Bhopal. This narrow street is one food paradise that every Bhopali will recommend for a bite. Paya Soup or lamb trotter’s soup is the best and one of the oldest delight that eventually gained it name right from these dark streets.It is believed that a trip to Bhopal is incomplete without a stroll in Chattori Gali and a bowl of Paya soup.",
    },
    {
        ID:81,
        Type:"Food",
        dataTitle:"Jack in the Box Tacos",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2018/07/jack-in-the-box-tacos.jpg?resize=800,586&quality=82&strip=all",
        description:"Tacos may not be the first thing to come to mind when you think of Jack in the Box, but Fortune reported that the chain sells more than 554 million of them per year, making tacos the chain's best-selling item.",
    },
    {
        ID:82,
        Type:"Food",
        dataTitle:"Mirchi Bajji, the Daawat-e-snack",
        dataImage:"https://www.thrillophilia.com/blog/wp-content/uploads/2015/05/shutterstock_1096274657-1170x618.jpg",
        description:"Our next cuisine is straight from the land of Daawat-e-ishq, Hyderabad, also known for its tourist attractions. Common appetizers, Mirchi Bajji are stuffed green chilli fritters that are served with lemon. Though Mirchi Bajjis vary in different regions but the Hydrabadi styled are certainly the best all over India. This snack is for some brave heart as the green chilies are known for inducing sweat and tears , so if you are planning to try it for the first time we advise you to have a glass of water ready.",
    },
    {
        ID:83,
        Type:"Food",
        dataTitle:"Bombil Fry, exclusively for you",
        dataImage:" https://i.ytimg.com/vi/wbLCW9CapAc/maxresdefault.jpg",
        description:"An all-time favorite sea food that is widely relished only in streets of Mumbai is actually a type of white fish that is exclusively available on Mumbai Coasts. A Goan inspired cuisine, Bombil or Bombla is certainly an ideal street food for sea food lovers. For the ones, who are just in the early phases of experimenting with sea foods, we recommend to stay away while your dish is being cooked. As they do not smell good while frying but what matters is the end result on your product…that is certainly just amazing.",
    },
    {
        ID:84,
        Type:"Food",
        dataTitle:"Starbucks Macchiato",
        dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/469806218/starbucks-iced-coconut-milk-mocha-macchiato.jpg?resize=800,586&quality=82&strip=all",
        description:"This foamy espresso concoction is a consistent favorite among Starbucks patrons and has been a mainstay on the menu for over three decades. The Caramel Macchiato is the most frequently ordered version today. ",
    },
    {
        ID:85,
        Type:"Food",
        dataTitle:"Panera Flatbreads",
         dataImage:"https://www.eatthis.com/wp-content/uploads/sites/4/2020/10/panera-flatbread-pizza-chipotle-chicken.jpg?resize=800,586&quality=82&strip=all",
        description:" Panera started offering flatbread pizzas during the pandemic, and they've quickly become a fan-favorite menu option.",
    },
    

 ] )
 

    return(
        <dataRoom.Provider   value={[ourData,setOurData]}>
            {props.children}
        </dataRoom.Provider>
    )

}


