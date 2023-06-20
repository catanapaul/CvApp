import { Component, OnInit } from '@angular/core';
import { ProjectDto } from 'src/app/_models/project-dto';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: ProjectDto[] = [];

  constructor() {
    this.initializeProjects();
   }

  ngOnInit(): void {
  }

  initializeProjects(): void {
    this.projects = [
      {
        projectName: "Project A",
        id: 1,
        created: new Date(),
        introduction: "Introduction for Project A",
        code: "proj-a",
        status: "In Progress",
        tech: "JavaScript",
        difficulty: "Medium",
        timeForCompletion: "2 weeks",
        category: "Web Development",
        tags: "HTML, CSS, JavaScript",
        documentation: [
          "https://developer.mozilla.org/",
          "https://www.w3schools.com/",
          "https://stackoverflow.com/"
        ],
        includes: [
          "User authentication",
          "Database integration",
          "File uploading",
          "Payment gateway integration"
        ],
        goal: "Build a responsive website",
        views: 100,
        likes: 10,
        comments: [],
        contributors: [],
        photos: [],
        photo: "https://picsum.photos/200"
      },
      {
        projectName: "Project B",
        id: 2,
        created: new Date(),
        introduction: "Introduction for Project B",
        code: "proj-b",
        status: "Completed",
        tech: "Python",
        difficulty: "Easy",
        timeForCompletion: "1 week",
        category: "Data Analysis",
        tags: "Pandas, Numpy",
        documentation: [
          "https://pandas.pydata.org/",
          "https://numpy.org/",
          "https://realpython.com/"
        ],
        includes: [
          "Data cleaning",
          "Data visualization",
          "Statistical analysis",
          "Machine learning"
        ],
        goal: "Analyze sales data",
        views: 50,
        likes: 5,
        comments: [],
        contributors: [],
        photos: [],
        photo: "https://picsum.photos/200"
      },
      {
        projectName: "Project C",
        id: 3,
        created: new Date(),
        introduction: "Introduction for Project C",
        code: "proj-c",
        status: "In Progress",
        tech: "Java",
        difficulty: "Hard",
        timeForCompletion: "3 months",
        category: "Software Development",
        tags: "Java, Spring, Hibernate",
        documentation: [
          "https://docs.oracle.com/en/java/",
          "https://spring.io/docs/",
          "https://hibernate.org/orm/documentation/"
        ],
        includes: [
          "API development",
          "Database management",
          "Integration testing",
          "Performance optimization"
        ],
        goal: "Develop an enterprise application",
        views: 80,
        likes: 8,
        comments: [],
        contributors: [],
        photos: [],
        photo: "https://picsum.photos/200"
      },
      {
        projectName: "Project D",
        id: 4,
        created: new Date(),
        introduction: "Introduction for Project D",
        code: "proj-d",
        status: "Planned",
        tech: "React",
        difficulty: "Medium",
        timeForCompletion: "1 month",
        category: "Web Development",
        tags: "JavaScript, React, CSS",
        documentation: [
          "https://reactjs.org/",
          "https://www.w3schools.com/react/",
          "https://dev.to/t/react"
        ],
        includes: [
          "Component-based architecture",
          "State management",
          "Responsive design",
          "API integration"
        ],
        goal: "Build a responsive web application",
        views: 30,
        likes: 3,
        comments: [],
        contributors: [],
        photos: [],
        photo: "https://picsum.photos/200"
      },
      {
        projectName: "Project E",
        id: 5,
        created: new Date(),
        introduction: "Introduction for Project E",
        code: "proj-e",
        status: "In Progress",
        tech: "C#",
        difficulty: "Hard",
        timeForCompletion: "6 months",
        category: "Software Development",
        tags: "C#, .NET, SQL",
        documentation: [
          "https://docs.microsoft.com/en-us/dotnet/csharp/",
          "https://dotnet.microsoft.com/learn",
          "https://docs.microsoft.com/en-us/sql/"
        ],
        includes: [
          "Backend development",
          "Database design",
          "Unit testing",
          "Security implementation"
        ],
        goal: "Develop an enterprise application",
        views: 60,
        likes: 6,
        comments: [],
        contributors: [],
        photos: [],
        photo: "https://picsum.photos/200"
      },
    ];
  }

  public GetStatusStyle(status: string) {
    switch (status) {
      case 'Completed':
        return 'green';
      case 'In Progress':
        return '#3498db';
      case 'Planned':
        return '#928133';
      default:
        return '#3498db';
    }
  }

}
