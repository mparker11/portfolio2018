const projects = [
    {
        title: 'Analog Devices',
        year: '2018',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Fad_logo.jpg?alt=media&token=e9514dae-2375-4ae3-b55b-120299c7f42c',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2FAD_screen_grab.mp4?alt=media&token=8938ddfa-db25-489b-9130-5fde98d89398',
        description: `Six weeks of intense coding produced the featured kiosk app built for the infamous CES showcase, 
                    designed by Analog Devices in order to highlight the industries in which the company creates its tech.`
    },
    {
        title: 'Collyde',
        year: '2018',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Fcollyde_logo.jpg?alt=media&token=530ea27b-ee0f-455b-8b26-c5ff25da7053',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2FCollyde.mp4?alt=media&token=5e113a59-263b-4e84-989e-cca1f23fe444',
        description: `People share services all the time, so why not invent a way that is more managed? That is 
                    what Collyde sets out to do with this beta hybrid app, looking to disrupt the online service industry.`
    },
    {
        title: 'codeSpark Academy',
        year: '2017',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Fcodespark_logo.jpg?alt=media&token=96af42df-5d12-4786-ab0f-8acf06393035',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2FcodeSpark.mp4?alt=media&token=6b19e97b-305e-4a71-a0f7-9ecb29bbfde6',
        description: `Multiple companion websites have been built for the indistinguishable codeSpark Academy mobile app for kids. 
                    The websites include the flagship, codespark.com, accompanied by an account managing website and blog 
                    -- all from scratch`
    },
    {
        title: 'Bus 21',
        year: '2017',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Fbus21_logo.jpg?alt=media&token=cd6d6971-72f3-4d9c-94bd-346fb9af389f',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2FBus_21.mp4?alt=media&token=ec1db3f1-1bd6-4155-8e03-717a2d8de869',
        description: `Bus 21 is a prototype hybrid app that included all planning, UX/UI design and coding. The idea is to 
                    give schools the freedom and tools to make school transportation more accessible and manageable.`
    },
    {
        title: 'Choose Your Hit',
        year: '2016',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Fchoose_your_hit.jpg?alt=media&token=bf3eea4a-6f3e-486d-8043-ee4a1be1378c',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2FChoose_Your_Hit.mp4?alt=media&token=336552f8-dc0d-4789-ade0-fa2c6e383cf8',
        description: `Viewed by hundreds of thousands, Choose Your Hit is a promotional website designed for the world-acclaimed 
                    video game, Hitman, released in Spring 2016 by Square Enix.`
    },
    {
        title: 'The Global Human',
        year: '2016',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Fthe_global_human_logo.jpg?alt=media&token=483f8a1c-1673-43da-aad8-31557fda555d',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2FThe_Global_Human.mp4?alt=media&token=3fe8046f-a492-40c9-8fb0-228c87593435',
        description: `All people have a voice, which is why this blogging platform was built for journalist 
                    Loureen Ayyoub. No, Wordpress was not good enough for this due to its high risk of 
                    hack-ability and astronomical amount of files.`
    },
    {
        title: 'Portfolio (2015)',
        year: '2015',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Fportfolio_v6_logo.jpg?alt=media&token=23234c35-b8c9-4ce9-becd-98211ab02e27',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2Fportfolio_v6.mp4?alt=media&token=c3f187bc-b65e-4d03-bc5c-40670c0888f6',
        description: `The sixth attempt at creating a portfolio worth pushing live; an attempt that was not wasted. The couple 
                    of years in web development proved worth it as the design from Charlene Chand came to life`
    },
    {
        title: 'Inhance Bejeweled',
        year: '2014',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Finhance_logo.jpg?alt=media&token=9342a8d7-30ea-48b9-8add-cba9eb27e882',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2FInhance_Bejeweled.mp4?alt=media&token=54d0472e-0636-435b-a39d-21ba98996810',
        description: `Bejeweled. Candy Crush. Farm Heroes. You know they are all the same. This is no different except it is a 
                    kiosk app created specifically for potential customers at a Vegas conference to get to know Inhance Digital.`
    },
    {
        title: 'The Media Dept',
        year: '2014',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fclients%2Fthe_media_dept_logo.jpg?alt=media&token=5dca00d3-af86-474a-b123-70e26e829fe1',
        video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/videos%2FThe_Media_Dept.mp4?alt=media&token=f612ed4a-9051-4baf-a57c-c11ed2b46073',
        description: `Clean lines and clear intention...That is exactly what The Media Dept designed in order to show off 
                    its talent for creating ads and commercials, complete with a backend that gives them the means to display 
                    work in progress to their clients.`
    }
];

export default projects;