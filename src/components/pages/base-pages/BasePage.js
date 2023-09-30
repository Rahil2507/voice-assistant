import React, { useEffect, useState, useRef } from "react";

import axios from "axios";
import jquery from 'jquery';

import alanBtn from "@alan-ai/alan-sdk-web";
import { Configuration, OpenAIApi }  from "openai";
import { collection, addDoc, getDocs } from 'firebase/firestore'

import AiBody from '../../assets/AI-body.png'
import BackgroundImage from '../../assets/bg1.jpg'
import BackgroundImageSmall from '../../assets/bg2.jpg'
import { database } from '../../api/firebaseConfig'

import HomePage from "./HomePage";
import CardsPage from "../personal-api/cards/CardsPage";
import NotesPage from "../personal-api/notes/NotesPage";
import RemindersPage from "../personal-api/reminders/RemindersPage";
import DocumentsPage from "../personal-api/documents/DocumentsPage";

import WeatherPage from "../external-api/WeatherPage";
import MoviePage from "../external-api/MoviePage";
import NewsPage from "../external-api/news/NewsPage";

import SongPage from "../external-api/SongPage";
import ImagePage from "../external-api/ImagePage";
import ConversionPage from "../external-api/ConversionPage";
import CountryPage from "../external-api/CountryPage";
import InsultPage from "../external-api/InsultPage";
import AdvicePage from "../external-api/AdvicePage";
import PlayerPage from "../external-api/PlayerPage";
import WikipediaPage from "../external-api/WikipediaPage";
import IpAdressPage from "../external-api/IpAdressPage";
import OpenAiPage from "../external-api/OpenAiPage";
import SearchPage from "../external-api/SearchPage";
import HeroPage from "../external-api/HeroPage";
import FoodPage from "../external-api/FoodPage";
import YoutubePage from "../external-api/youtube/YoutubePage";
import YoutubeVideo from "../external-api/youtube/YoutubeVideo";

const BasePage = () => {
  const dataFetchedRef = useRef(false);
  const personal = useRef(false);
  

  const [text, setText] = useState('')
  const [textBar, setTextBar] = useState(false)
  
  
  const alanBtnRef = useRef({}).current;
  const [page, setPage] = useState("home");
  const [pageHeader, setPageHeader] = useState('')
  const [aiBodyImageHeight, setAiBodyImageHeight] = useState('380px')

  const [data, setData] = useState({
    cards: [],
    notes: [],
    reminders: [],
    documents: [],
    weather: [],
    movie: {},
    conversion: {},
    crypto: {},
    country: {null: null},
    insult: "",
    advice: "",
    player: {},
    distance: {},
    wikipedia: {},
    search: {},
    youtube: {},
    news: [],
    ip : '',
    hero: {},
    food: {},
    foodCard: '',
    song: {},
    openAi: [null, null],
    image: null,
  });
  
  useEffect(() => {
    
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    alanBtnRef.btnInstance =  alanBtn({
      bottom: '40px',
      right: '130px',
      zIndex: 10,
      key: "d7f61e5a9e816332ef8b6ab26c29cd7c2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({
        command,
        reminder,
        weather,
        news,
        movie,
        conversion,
        crypto,
        country,
        insult,
        advice,
        player,
        distance,
        wikipedia,
        search,
        youtube,
        hero,
        food,
        song,
        openAi,
        image,
      }) => {
        switch (command) {
          default:
            setPage("home");
            setPageHeader('')
            break;
          case "personal":
            // console.log('personal')
            unlock()
            break

          case "reqCards":
            reqCards()
            break;
          case "cards":
            setPage("cards");
            setPageHeader('Credit Cards')
            break;
          
          case "reqNotes":
            reqNotes()
            break;
          case "notes":
            setPage("notes");
            setPageHeader('Notes')
            break;

          case "reqReminders":
            reqReminders()
            break;
          case "reminders":
            setPage("reminders");
            setPageHeader('Reminders')
            break;
          case "addReminder":
            addReminder(reminder)
            break
          
          case "reqDocuments":
            reqDocuments()
            break;
          case "documents":
            setPage("documents");
            setPageHeader('Documents')
            break;
            
          case "weather":
            setData({ ...data, weather: weather });
            setPage("weather");
            setPageHeader('Weather')
            break;
          case "movie":
            setData({ ...data, movie: movie });
            setPage("movie");
            setPageHeader('Movie')
            break;
          case "conversion":
            setData({ ...data, conversion: conversion });
            setPage("conversion");
            setPageHeader('Money Conversion')
            break;
          case "crypto":
            setData({ ...data, crypto: crypto });
            // setPage("crypto");
            break;
          
          case "country":
            setData({ ...data, country: country });
            setPage("country");
            setPageHeader('Country')
            break;
          case "insult":
            setData({ ...data, insult: insult });
            setPage("insult");
            setPageHeader('Insult')            
            break;
          case "advice":
            setData({ ...data, advice: advice });
            setPage("advice");
            setPageHeader('Advice')
            break;
          case "player":
            setData({ ...data, player: player });
            setPage("player");
            setPageHeader('Player')
            break;
          case "distance":
            setData({ ...data, distance: distance });
            // setPage("distance");
            break;
          case "wikipedia":
            setData({ ...data, wikipedia: wikipedia });
            setPage("wikipedia");
            setPageHeader('Wikipedia : '+ wikipedia.title)
            break;
          
          case "search":
            setData({ ...data, search: search });
            setPage("search");
            setPageHeader('Search')
            break;
          case "youtube":
            setData({...data, youtube: youtube})
            setPage("youtube")
            setPageHeader('Youtube : ' + youtube.search_parameters.search_query.charAt(0).toUpperCase() + youtube.search_parameters.search_query.slice(1))
            break
          case "playYoutube":
            setData({...data, youtube: youtube})
            setPage("playYoutube")
            setPageHeader('Youtube')
            // setPageHeader('Youtube : ' + youtube.search_parameters.search_query.charAt(0).toUpperCase() + youtube.search_parameters.search_query.slice(1))
            break

          case "news":
            getNews(news)
            setPageHeader('News : '+ news)
            break;
          case "ip":
            getIp()
            setPageHeader('IP address')
            break;
          case "hero":
            getHero(hero)
            setPageHeader('Superhero')
            break;
          case "food":
            getFood(food)
            setPageHeader("Food")
            break;
          case "song":
            getSong(song)
            setPageHeader('Song')
            break;
          case "stopSong":
            setPage("home");
            break;
          case "openAi":
            getOpenAi(openAi)
            setPageHeader('JARVIS')
            break;
          case "image":
            getImage(image)
            setPageHeader('Images of '+ image)
            break;

          case "close":
            window.open('', '_self', ''); window.close();
            break;
          
          case "back":
            setPage("home");
            break;
        }
      },
    });
  },[])

  const activeAlan = () => {
    if (alanBtnRef.btnInstance.isActive()){
      alanBtnRef.btnInstance.deactivate()
    }else{
      alanBtnRef.btnInstance.activate()
    }
  }


  const unlock = () => {
    personal.current = true
  }

  const denyAccess = (task) => {
    alanBtnRef.btnInstance.callProjectApi("personal", {
      for : task
    },function(error, result) {
      console.log(error, result)
    });
  }

  const reqCards = () => {
    if(personal.current === true){

      const collectionRef = collection(database, 'cards')
      getDocs(collectionRef)
      .then((res) => {
        let cardsData = []
        res.docs.map((item) =>  cardsData.push(item.data()))
        setData({...data, cards: cardsData})
        alanBtnRef.btnInstance.callProjectApi("getCards", {
          cards : cardsData
        },function(error, result) {
          console.log(error, result)
        });
      })
      .catch((err) => console.log(err))
    
    }else{
      denyAccess('Cards')
    }
  }

  const reqNotes = () => {
    if(personal.current === true){
      
      const collectionRef = collection(database, 'notes')
      getDocs(collectionRef)
      .then((res) => {
        let notesData = []
        res.docs.map((item) =>  notesData.push(item.data()))
        setData({...data, notes: notesData})
        alanBtnRef.btnInstance.callProjectApi("getNotes", {
          notes : notesData
        },function(error, result) {
          console.log(error, result)
        });
      })
      .catch((err) => console.log(err))

    }else{
      denyAccess('Notes')
    }
  }

  const reqReminders = () => {
    if(personal.current === true){
      const collectionRef = collection(database, 'reminders')
      getDocs(collectionRef)
      .then((res) => {
        let remindersData = []
        res.docs.map((item) =>  remindersData.push(item.data()))
        setData({...data, reminders: remindersData})
        alanBtnRef.btnInstance.callProjectApi("getReminders", {
          reminders : remindersData
        },function(error, result) {
          console.log(error, result)
        });
      })
      .catch((err) => console.log(err))
    }else{
      denyAccess('Reminders')
    }
  }

  const addReminder = (reminder) => {
    const collectionRef = collection(database, 'reminders')
    addDoc(collectionRef, {
      id: 0,
      title: reminder
    })
    .then(() => {
      alanBtnRef.btnInstance.callProjectApi("reminderAdded", {
        reminder : reminder
      },function(error, result) {
        console.log(error, result)
      });
    })
    .catch((err) => console.log(err.message))
  }

  const reqDocuments = () => {
    if(personal.current === true){
      const collectionRef = collection(database, 'documents')
      getDocs(collectionRef)
      .then((res) => {
        let documentsData = []
        res.docs.map((item) =>  documentsData.push(item.data()))
        setData({...data, documents: documentsData})
        alanBtnRef.btnInstance.callProjectApi("getDocuments", {
          documents : documentsData
        },function(error, result) {
          console.log(error, result)
        });
      })
      .catch((err) => console.log(err))
    }else{
      denyAccess('Documents')
    }
  }

  const changePage = () => {
    setPage('home')
  }

  const getNews = (news) => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY
    const latestNewsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
    const newsUrl = `https://newsapi.org/v2/everything?pageSize=20&apiKey=${apiKey}&q=${news}`

    const url = news === 'latest' ? latestNewsUrl : newsUrl

    axios
      .request(url)
      .then(function (response) {
        const newsData = response.data.articles
        setData({ ...data, news: newsData });
        setPage("news")
        alanBtnRef.btnInstance.callProjectApi("getNews", {
          news: newsData
        }, function(error, result) {
          console.log(error, result)
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  } 

  const getIp = () => {
    const ipUrl = `https://api.ipify.org/?format=json`;
    axios
      .request(ipUrl)
      .then(function (response) {
        let ip = response.data.ip
        setData({ ...data, ip: ip });
        setPage("ip");
        alanBtnRef.btnInstance.callProjectApi("getIp", {
          ip: ip
        }, function(error, result) {
          console.log(error, result)
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getHero = async (hero) => {
    const options = {
      method: "GET",
      url: "https://superhero-search.p.rapidapi.com/api/",
      params: { hero: hero },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_HERO_API_KEY,
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        let hero = response.data
        setData({ ...data, hero: hero });
        setPage('hero')
        console.log(hero)
        alanBtnRef.btnInstance.callProjectApi("getHero", {
          hero: hero
        }, function(error, result) {
          console.log(error, result)
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getFood = async (food) => {
    const recipe = food
    // const apiKey = '3ae4e54b1e354e2d8dc412a0b7644afd'
    // const apiKey = '1175fc2876b84a4facd38f144ebce2ed'
    const apiKey = process.env.REACT_APP_FOOD_API_KEY
    const foodUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&number=1&&apiKey=${apiKey}`;
    axios
    .request(foodUrl)
    .then(function (response) {
      const foodId = response.data.results[0].id

      const foodUrl = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${apiKey}`
        axios
        .request(foodUrl)
        .then(function (response) {
          let food = response.data
          const foodInsText = jquery(food.instructions).text();
          food = { ...food, instructions: foodInsText }
          setData({ ...data, food: food });
          console.log(food)
          alanBtnRef.btnInstance.callProjectApi("getFood", {
            food: food
          }, function(error, result) {
            console.log(error, result)
          });
        })
        .catch(function (error) {
          console.error(error);
        });

      const cardUrl = `https://api.spoonacular.com/recipes/${foodId}/card?apiKey=${apiKey}`
        axios
        .request(cardUrl)
        .then(function (response) {
          setPage('food')
          const foodCard = response.data.url
          setData({ ...data, foodCard: foodCard });
        })
        .catch(function (error) {
          console.error(error);
        });  

    })
    .catch(function (error) {
      console.error(error);
    });    
  }

  const getSong = async (song) => {
    const clientId = 'c9b43201c2e84485b69e6e1e2c3763d7';
    const clientSecret = process.env.REACT_APP_SONG_API_KEY;
    // let spotifyToken = data.spotifyToken

    // if (spotifyToken === null) {
      const fetchToken = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
        },
        body : 'grant_type=client_credentials'
      })
      const spotifyToken = await fetchToken.json()
    // }
    
    const fetchSong = await fetch(`https://api.spotify.com/v1/search?q=${song}&type=track&market=IN&limit=1`, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + spotifyToken.access_token
      },
    });
    
    const songResult = await fetchSong.json()

    const songData = {
      'spotifyToken': spotifyToken,
      'name': songResult.tracks.items[0].name,
      'image': songResult.tracks.items[0].album.images[0].url,
      'artist': songResult.tracks.items[0].album.artists[0].name ,
      'url': songResult.tracks.items[0].preview_url,
      'open': songResult.tracks.items[0].external_urls.spotify,

    }
    setData({ ...data, song: songData });
    setPage("song");
  }
  
  const getOpenAi = async (text) => {
    setData({...data, openAi: [text, null]})
    setPage('openAi')
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 250,
      temperature: 0.5,
    });
    const openAi = response.data.choices[0].text
    setData({...data, openAi: [text, openAi]})
    alanBtnRef.btnInstance.callProjectApi("getOpenAi", {
      openAi: openAi
    }, function(error, result) {
      console.log(error, result)
    });
  };

  const getImage = async (prompt) => {
    setPage("image")
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: prompt,
      n: 3,
      size: "512x512",
    });
    let image = response.data.data
    setData({ ...data, image: image });
    ;    
  };


  return (
    <div style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', height: '100vh'}} >
      <div style={{position: 'absolute', bottom: 0, width: '100%', height: '40%'}} className='screencont'/>
      <div style={{width: '310px', position:'absolute', right:'1%', borderRadius: 20, marginTop: '5vh', height: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems:'center' , color: 'white', fontFamily: 'cursive', fontSize: 20, backgroundImage: `url(${BackgroundImageSmall})`, backgroundSize: 'cover' }}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{margin: 10}}>J A R V I S</p>
          {personal.current === true && <p style={{fontSize: 10}}>Personal Mode</p>}
        </div>
      { page !== 'home' && <img src={AiBody} onClick={() => {activeAlan ()}} style={{height: aiBodyImageHeight, cursor: 'pointer', position: 'relative', top : '-25px'}} onMouseEnter={() => {setAiBodyImageHeight('400px')}}  onMouseLeave={() => {setAiBodyImageHeight('380px')}} alt="ai-logo" />}
        <div style={{display: 'flex', justifyContent: 'end' , width: '100%'}}>
          <p style={{fontSize: 10 , margin: 5, paddingLeft: 15}}>RAHIL AHMAD</p>
        </div>      

      </div>
      {page !== 'home' ?
      <div style={{marginLeft: '2%', marginRight: '2%', top: '4%' , position: 'relative', borderRadius: 25, padding: '3px', maxWidth: '1025px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className='box'>
        <div style={{}}>
          <div style={{backgroundColor: 'black', color:'white', display: 'flex', justifyContent: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: '10px', margin: '2px'}}>{pageHeader}</div>
          <div  style={{margin: '20px', color: 'white', display: 'flex', justifyContent: 'center'}}>
            {page === "cards" ? (<CardsPage cards={data.cards} />) 
            : page === "notes" ? (<NotesPage notes={data.notes} />) 
            : page === "reminders" ? (<RemindersPage reminders={data.reminders} />) 
            : page === "documents" ? (<DocumentsPage documents={data.documents} />) 
            
            : page === "weather" ? (<WeatherPage weather={data.weather} />) 
            : page === 'movie' ? (<MoviePage movie={data.movie}/>)
            : page === 'conversion' ? (<ConversionPage conversion={data.conversion}/>)
            
            : page === 'country' ? (<CountryPage country={data.country}/>)
            : page === 'insult' ? (<InsultPage insult={data.insult}/>)
            : page === 'advice' ? (<AdvicePage advice={data.advice}/>)
            : page === 'player' ? (<PlayerPage player={data.player}/>)
            : page === 'wikipedia' ? (<WikipediaPage wikipedia={data.wikipedia}/>)
            
            : page === "search" ? (<SearchPage search={data.search} />) 
            : page === "youtube" ? (<YoutubePage youtube={data.youtube} />) 
            : page === "playYoutube" ? (<YoutubeVideo video={data.youtube} closePlayer={changePage}/>) 
            
            : page === "news" ? (<NewsPage news={data.news} />) 
            : page === "ip" ? (<IpAdressPage ip={data.ip} />) 
            : page === "hero" ? (<HeroPage hero={data.hero} />) 
            : page === "food" ? (<FoodPage food={data.foodCard} />) 
            : page === "song" ? (<SongPage song={data.song} changePage={changePage}/>) 
            : page === "openAi" ? (<OpenAiPage openAi={data.openAi} />) 
            : page === "image" ? (<ImagePage image={data.image} />) 
            : (<></>)}
          </div>
        </div>
      </div>
      :<div style={{position: 'absolute', right: '310px', left: '0px'}}>
        <HomePage button={activeAlan} />
      </div>}
      
      {textBar ? <div style={{position: 'absolute', bottom: '110px', right: '50px', backgroundColor: 'gray', padding: '5px', display: 'flex', borderRadius: 5}}>
        <input autoFocus value={text} onChange={(e) => {setText(e.target.value)}} style={{paddingLeft: '5px'}} placeholder=" Talk to Jarvis"/>
        <button style={{margin: '3px', marginLeft: '10px'}} onClick={() => { alanBtnRef.btnInstance.activate() ; alanBtnRef.btnInstance.sendText(text)}}>Go</button>
      </div>
    : <div onClick={() => {setTextBar(true)}} style={{position: 'absolute', bottom: '110px', right: '146px', backgroundColor: 'gray', padding: '5px', display: 'flex', borderRadius: 5, cursor: 'pointer'}}>
      <p>Type</p>
    </div> }
    </div>
  );
}

export default BasePage