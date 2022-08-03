import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons'; 
import Answer from "../answer/answer";
import Question from "../question/question";
import './form.css';
import '../dog/dog.js';

/** I APOLOGIZE FOR BRINGING DATA IN HERE BUT LGHALEB LAH*/
const dogs = [
    {
        breed:'Rottweiller',
        house:2,
        size:2,
        sport:3,
        kids:2,
        guard:2,
        skill:1,
        animals:2,
        maintenance:1,
        quality:1,
        alone:1
    },
    {
        breed:'Berger belge Malinois',
        house:2,
        size:2,
        sport:3,
        kids:2,
        guard:3,
        skill:1,
        animals:2,
        maintenance:2,
        quality:1,
        alone:2
    },
    {
        breed:'Berger allemand',
        house:3,
        size:3,
        sport:3,
        kids:2,
        guard:3,
        skill:1,
        animals:2,
        maintenance:2,
        quality:1,
        alone:1
    },
    {
        breed:'Golden retriever',
        house:1,
        size:2,
        sport:2,
        kids:2,
        guard:2,
        skill:1,
        animals:2,
        maintenance:2,
        quality:2,
        alone:1
    },
    {
        breed:'Carlin',
        house:1,
        size:1,
        sport:1,
        kids:2,
        guard:1,
        skill:1,
        animals:2,
        maintenance:2,
        quality:2,
        alone:1
    },
    {
        breed:'Bouledogue Francais',
        house:1,
        size:1,
        sport:1,
        kids:2,
        guard:1,
        skill:1,
        animals:2,
        maintenance:2,
        quality:1,
        alone:2
    },
    {
        breed:'Bouledogue Anglais',
        house:1,
        size:2,
        sport:1,
        kids:2,
        guard:2,
        skill:1,
        animals:2,
        maintenance:2,
        quality:2,
        alone:2
    },
    {
        breed:'Braque de Weimar',
        house:3,
        size:3,
        sport:3,
        kids:3,
        guard:3,
        skill:1,
        animals:2,
        maintenance:2,
        quality:2,
        alone:1
    },
    {
        breed:'Fox Terrier',
        house:3,
        size:1,
        sport:3,
        kids:2,
        guard:3,
        skill:1,
        animals:1,
        maintenance:2,
        quality:1,
        alone:1
    },
    {
        breed:'Basset des Alpes',
        house:3,
        size:1,
        sport:3,
        kids:2,
        guard:2,
        skill:1,
        animals:2,
        maintenance:2,
        quality:1,
        alone:1
    },
    {
        breed:'Husky siberien',
        house:2,
        size:2,
        sport:3,
        kids:2,
        guard:1,
        skill:1,
        animals:2,
        maintenance:2,
        quality:1,
        alone:1
    },
    {
        breed:'Spitzner Allemand',
        house:1,
        size:1,
        sport:2,
        kids:2,
        guard:2,
        skill:1,
        animals:2,
        maintenance:3,
        quality:2,
        alone:2
    },
    {
        breed:'Samoyede',
        house:3,
        size:2,
        sport:3,
        kids:2,
        guard:1,
        skill:1,
        animals:3,
        maintenance:3,
        quality:2,
        alone:3
    },
    {
        breed:'Akita Inu',
        house:1,
        size:3,
        sport:3,
        kids:2,
        guard:1,
        skill:1,
        animals:1,
        maintenance:2,
        quality:1,
        alone:1
    },
    {
        breed:'Shiba Inu',
        house:2,
        size:1,
        sport:3,
        kids:1,
        guard:2,
        skill:2,
        animals:1,
        maintenance:1,
        quality:1,
        alone:3
    },
    {
        breed:'Cane Corso',
        house:3,
        size:3,
        sport:3,
        kids:3,
        guard:3,
        skill:2,
        animals:2,
        maintenance:2,
        quality:1,
        alone:2
    },
    {
        breed:'Chihuahua',
        house:1,
        size:1,
        sport:2,
        kids:3,
        guard:2,
        skill:1,
        animals:2,
        maintenance:2,
        quality:2,
        alone:3
    },
    {
        breed:'Bichon Maltais',
        house:1,
        size:1,
        sport:2,
        kids:3,
        guard:1,
        skill:1,
        animals:3,
        maintenance:3,
        quality:3,
        alone:1
    },
    {
        breed:'Shih Tzu',
        house:1,
        size:1,
        sport:1,
        kids:3,
        guard:1,
        skill:1,
        animals:2,
        maintenance:3,
        quality:1,
        alone:1
    }
];
/** */

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            questions:{
                1:'Dans quel type d’habitation vivez-vous ?',
                2:'Quelle est votre taille idéale pour un chien ?',
                3:'Souhaiteriez-vous faire du sport avec votre chien ?',
                4:'Votre chien devra-t-il cohabiter avec des enfants ?',
                5:'Souhaitez-vous un chien de garde pour protéger votre maison ?',
                6:'Quel est votre niveau en matière d’éducation de chiens ?',
                7:'Votre chien devra-t-il vivre avec d’autres animaux ?',
                8:'L’entretien d’un chien représente- t- il une corvée pour vous ?',
                9:'Selon vous et vos besoins, Quelle doit être la qualité principale de votre chien ?',
                10:'Votre chien risque-t-il d’être quotidiennement seul la journée ?'
            },
            answers:{
                1:{
                    1:'Un appartement en ville',
                    2:'Une maison ou appartement avec terrasse',
                    3:'Une maison de campagne avec jardin'
                },
                2:{
                    1:'J’adore les petits chiens',
                    2:'Je préfère un chien de taille moyenne',
                    3:'Je veux le plus grand chien possible'
                },
                3:{
                    1:'Je suis plutôt casanier, et j’aime que mon chien soit un inepte du canapé et des soirees tele',
                    2:'Modérément, une activité physique par semaine c’est suffisant',
                    3:'Absolument je suis un grand sportif et je souhaite que mon chien me suive pendant mes activités physiques régulières'
                },
                4:{
                    1:'Non je n’ai pas d’enfants et je n’en fréquente pas',
                    2:'Oui, mes proches ont des enfants et je veux qu’il soit gentil avec eux',
                    3:'Oui, j’ai des enfants et je souhaite qu’ils soient complices entre eux'
                },
                5:{
                    1:'Non, pas du tout',
                    2:'S’il peut accessoirement repousser les intrus ca serait appréciable',
                    3:'Oui, c’est pour cette raison que j’achète un chien'
                },
                6:{
                    1:'C’est mon premier chien, j’aimerai qu’il soit facile à éduquer et obéissant',
                    2:'J’ai un peu d\'expérience en éducation ',
                    3:'J’ai deja ete le propriétaire de plusieurs chiens alors l\'éducation ca me connait'
                },
                7:{
                    1:'Non, je n\'en ai pas et il ne sera pas amené à en rencontrer d’autres',
                    2:'Un peu oui ! Ne serait ce que pour les promenades dans les lieux publics',
                    3:'Oui, j’ai d’autres animaux à la maison'
                },
                8:{
                    1:'Oui je n’ai pas un emploi de temps adéquat pour chouchouter mon animal',
                    2:'Pas vraiment je ne suis pas contre un petit toilettage de temps en temps pour le faire beau',
                    3:'Pas du tout, je veux d’ailleurs en faire une bête de concours'
                },
                9:{
                    1:'L’intelligence : comme les chiens de recherche ou les chiens guides : capable d\'être éduqué pour des tâches spécifiques',
                    2:'S’il est affectueux et de bonne compagnie, c’est le principal',
                    3:'Calme'
                },
                10:{
                    1:'Non, je suis régulièrement à mon domicile',
                    2:'Une demie journée pas plus',
                    3:'8 heures ou plus'
                }
            },
            step:1,
            clickedAnswer:0,
            chosenAnswers:[]
        };
    }
    
    checkAnswer = (answer) => {
        const {step,chosenAnswers,clickedAnswer} = this.state;
        if(!clickedAnswer){
            this.setState({
                clickedAnswer:answer,
                chosenAnswers: [...chosenAnswers,answer]
            });
        }
        else{
            if(chosenAnswers.length==1){
                this.setState({
                    clickedAnswer:answer,
                    chosenAnswers: [...answer]
                });
            }else{
                this.setState({
                    clickedAnswer:answer,
                    chosenAnswers: [...chosenAnswers.splice(0,chosenAnswers.length-1),answer]
                });
            }
            
        }
    }

    nextStep = step => {
        this.setState({
            step : step+1,
            clickedAnswer:0
        });
    }

    dogForYou = dogs => {
        const {chosenAnswers} = this.state;
        return dogs
            .filter(dog=>(
                dog.house       == chosenAnswers[0] &&
                dog.size        == chosenAnswers[1] &&
                dog.sport       == chosenAnswers[2] &&
                dog.kids        == chosenAnswers[3] &&
                dog.guard       == chosenAnswers[4] &&
                dog.skill       == chosenAnswers[5] &&
                dog.animals     == chosenAnswers[6] &&
                dog.maintenance == chosenAnswers[7] &&
                dog.quality     == chosenAnswers[8] &&
                dog.alone       == chosenAnswers[9] 
            ))
            .map(dog => dog.breed)
    }

    render(){
        let {questions, step, answers, clickedAnswer}= this.state;
        
        return <div className="Content">
            {
            step<=Object.keys(questions).length 
            ?
                <>
                <Question 
                question={questions[step]}
                />

                <Answer 
                answer={answers[step]} 
                checkAnswer={this.checkAnswer}
                clickedAnswer={clickedAnswer}
                />

                <button
                className="NextStep"
                disabled={
                    clickedAnswer && Object.keys(questions).length >= step
                    ? false : true
                }
                onClick={() => this.nextStep(step)}
                >
                    Next Question
                </button></>
            :
                <div className="finalPage">
                    <h1>You have completed the quizz</h1>
                    <p>The best dog according to your answers is : 
                        {
                            this.dogForYou(dogs)
                        }
                    </p>
                    <p>Thank you</p>
                </div>
            }

        </div>;
    }
    
}
export default Form;