import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  experiences = [
    {
      periode: 'Jan. 2019 – Aujourd’hui (1 an)',
      society: 'TSI',
      post: 'Analyste Développeur .NET',
      missions:
        [
          'Conception et développement du progiciel ERP de TSI',
          'Concevoir et développement de logiciel commercial de FARMASI'
        ],
      technology: 'C# 5.0, .Net Framework 4.5, Microsoft SQL Server 2014, SAP Crystal Reports,'
        + 'Visual Studio 2017, DevExpress 17, WPF, WinForms'
    },
    {
      periode: 'Sep. 2017 – Dec. 2018 (1 an et 3 mois)',
      society: 'AACMI',
      post: 'Développeur .NET',
      missions:
        [
          'Conception et développement d’un ERP spécifique. Développement et maintenance du site web'
        ],
      technology: 'C# 5.0, .Net Framework 4.5, Microsoft SQL Server 2012, SAP Crystal Reports,'
        + 'Visual Studio 2013, Wordpress, Visual Studio Code'
    }
  ];

  formations = [
    {
      periode: '2019 – Aujourd’hui',
      name: 'Mastère Professionnel Spécialité : Ingénierie des applications Web-Nuagiques',
      university: 'UVT / ISET Kairouan'
    },
    {
      periode: '2012 - 2017',
      name: 'Licence Applique en Informatique Spécialité : Développement Système Informatique',
      university: 'ISET Charguia'
    },
    {
      periode: '2012',
      name: 'Baccalauréat en Sciences de L’Informatique',
      university: 'Lycée Ibn Rachik, Ben Arous, Ezzahra'
    }
  ];

  traineeships = [
    {
      periode: 'Fév. 2017 – Mai. 2017',
      society: 'AACMI',
      type: 'Projet de fin d\'études',
      description: 'Développement et maintenance d’un ERP spécifique.'
    },
    {
      periode: 'Jan. 2017 – Fév. 2017',
      society: 'STB',
      type: 'Stage',
      description: 'Développement d’une application C# permettant de gérer les tickets d’essences.'
    },
    {
      periode: 'Jan. 2014 – Fév. 2014',
      society: 'STB',
      type: 'Stage de perfectionnement',
      description: 'Développement d’une application web permettant de gérer tous les stagiaires aux sièges et les agences.'
    },
    {
      periode: 'Jan. 2013 – Fév. 2013',
      society: 'STUSID',
      type: 'Stage d\'initiation'
    }
  ];

  skills = [
    {
      title: 'Langages',
      description: 'C#, JAVA, HTML, CSS, JavaScript, XML, PHP, TypeScript'
    },
    {
      title: 'OS',
      description: 'Windows, Linux'
    },
    {
      title: 'SGBD',
      description: 'SQL Server, Oracle Database'
    },
    {
      title: 'VSC',
      description: 'Git, TFS'
    },
    {
      title: 'Bibliothèque',
      description: 'Bootstrap, JQuery'
    },
    {
      title: 'Framework',
      description: 'Angular'
    },
    {
      title: 'CMS',
      description: 'Wordpress'
    },
  ];

  languages = [
    {
      title: 'Arabe',
      width: 80
    },
    {
      title: 'Français',
      width: 70
    },
    {
      title: 'Anglais',
      width: 70
    },
  ];

  hobbies = [
    {
      title: 'Voyager',
      description: 'Asie (South Korea, Japon, Thaïlande).'
    },
    {
      title: 'Sport',
      description: 'Musculation, Football.'
    },
    {
      title: 'Activité',
      description: 'Camping, Randonner'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
