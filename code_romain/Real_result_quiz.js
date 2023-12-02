// Define characters and their associated questions with points
const characters = {
    Aatrox: {
        questions: {
            question1: { A: 1, B: 0, C: 0 },
            question2: { A: 0, B: 1, C: 0 },
            // Add more questions and points as needed
        },
        totalPoints: 0,
    },
    Akali: {
        questions: {
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Camille:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Chogath:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Darius:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    DrMundo:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Fiora:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Gangplank:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Garen:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Gnar:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Gragas:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Gwen:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Heimerdinger:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Illaoi:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Irelia:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Jax:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Jayce:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Ksante:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Kayle:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Kennen:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Kled:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Malphite:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Mordekaiser:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Nasus:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Olaf:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Ornn:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Pantheon:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Poppy:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Quinn:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Renekton:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Riven:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Rumble:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Sett:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Shen:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Singed:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Sion:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    TahmKench:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Teemo:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Trundle:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Tryndamere:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Udyr:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Urgot:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Volibear:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Warwick:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Wukong:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Yone:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    Yorick:{
        questions:{
            question1: { A: 0, B: 1, C: 0 },
            question2: { A: 0, B: 0, C: 1 },
        },
        totalPoints: 0,
    },
    // Add more characters as needed
  };