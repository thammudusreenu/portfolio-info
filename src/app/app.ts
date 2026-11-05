import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  menuOpen = false;

  readonly navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  readonly experiences = [
    {
      role: 'Director of Photography (DOP)',
      period: '2022-Present',
      description:
        'Working as a Director of Photography for films, short films, web series, documentaries, corporate projects, and commercial shoots. Worked as DOP for 70+ short films, including 5 award-winning short films. Specializing in visual storytelling, cinematography, creative lighting, and cinematic composition.'
    },
    {
      role: 'Professional Gimbal Operator',
      period: '2018-2022',
      description:
        'Started my journey as a Professional Gimbal Operator, working on 25+ feature films, including two major Pan-India productions, Saaho and Sye Raa Narasimha Reddy. Specialized in smooth camera movements, dynamic tracking shots, creative framing, and cinematic camera operations.'
    },
    {
      role: 'Lighting Specialist',
      period: '2016-2018',
      description:
        'Started my career as a Lighting Specialist, gaining hands-on experience in professional film lighting, lighting setups, exposure control, and creating the right visual mood for cinematic scenes. Developed a strong foundation in cinematography and visual aesthetics.'
    }
  ];

  readonly coreExpertise = [
    'Cinematic visual storytelling',
    'Camera and gimbal operation',
    'Lighting design and exposure',
    'Composition and camera movement',
    'Collaborative on-set work'
  ];

  readonly technicalSkills = [
    // Cinematography & Camera
    'Director of Photography (DOP)',
    'Professional Gimbal Operation',
    'Professional Camera Operation',
    'Cinematography',
    'Camera Movement & Framing',
    'Visual Composition',
    'Tracking & Dynamic Shots',

    // Lighting Expertise
    'Professional Lighting Techniques',
    'Lighting Setup & Execution',
    'Creative Lighting Design',
    'Exposure Control',
    'Scene Lighting & Mood Creation',

    // Film & Video Production
    'Feature Film Shooting',
    'Short Film Cinematography',
    'Web Series Production',
    'Government Documentary Shooting',
    'Corporate Video Production',
    'Commercial & Brand Shoots',
    'Hospital Infrastructure Filming',
    'Pan-India Film Productions',

    // Creative Expertise
    'Visual Storytelling',
    'Shot Composition',
    'Cinematic Visualisation',
    'Camera Angles & Movement',
    'On-Location Cinematography',
    'Production Coordination'
  ];

  readonly projects = [
    {
      name: 'Feature films',
      description:
        'Gimbal operator on 25+ feature films, including the Pan-India productions Saaho and Sye Raa Narasimha Reddy.'
    },
    {
      name: 'Short films',
      description:
        'Director of Photography on 70+ short films, including five award-winning productions.'
    },
    {
      name: 'Digital and documentary',
      description:
        'Camera work across web series, documentaries, corporate films, commercials, and location productions.'
    }
  ];

  readonly interests = [
    'Feature films',
    'Visual storytelling',
    'Camera movement',
    'Lighting design',
    'Documentary',
    'Location shoots'
  ];

  readonly contactLinks = [
    {
      label: 'Email',
      value: 'sreenuthammududop17@gmail.com',
      href: 'mailto:sreenuthammududop17@gmail.com',
      icon: '@'
    },
    {
      label: 'Phone',
      value: '+91 8143466737',
      href: 'tel:+918143466737',
      icon: '☎'
    },
    {
      label: 'Instagram',
      value: '@thammudu_sreenu',
      href: 'https://www.instagram.com/thammudu_sreenu/',
      icon: '◎'
    }
  ];

  showAllSkills = false;

  showAll = false;

  shoots = [
    {
      title: 'On-set camera work',
      category: 'BEHIND THE SCENES',
      image: 'assets/profile1.jpg',
      description:
        'A closer look at the people, preparation, and camera setups that bring a production to life.',
      highlights: 'Film & media',
      role: 'Cinematography'
    },
    {
      title: 'Production collaboration',
      category: 'ON SET',
      image: 'assets/profile2.jpg',
      description:
        'Working alongside the crew to shape each setup with thoughtful framing and a clear visual direction.',
      highlights: 'Collaborative sets',
      role: 'Camera team'
    },
    {
      title: 'Location cinematography',
      category: 'LOCATION WORK',
      image: 'assets/profile3.jpeg',
      description:
        'Adapting camera movement and composition to the location while keeping the story in focus.',
      highlights: 'On-location shoots',
      role: 'Camera operator'
    },
    {
      title: 'Gimbal operation',
      category: 'CAMERA & GIMBAL',
      image: 'assets/profile4.jpeg',
      description:
        'Creating smooth, deliberate camera movement for dynamic scenes and commercial-style setups.',
      highlights: 'Dynamic movement',
      role: 'Gimbal operator'
    },
    {
      title: 'Camera department',
      category: 'PRODUCTION',
      image: 'assets/profile5.jpeg',
      description:
        'Preparing and operating camera equipment as part of a coordinated production crew.',
      highlights: 'Production workflow',
      role: 'Camera team'
    },
    {
      title: 'Production planning',
      category: 'CREW COLLABORATION',
      image: 'assets/profile6.jpeg',
      description:
        'Collaborating with the production team to plan coverage and make each camera setup count.',
      highlights: 'Team coordination',
      role: 'Camera team'
    },
    {
      title: 'Shaping the scene',
      category: 'LIGHTING & CAMERA',
      image: 'assets/profile7.jpeg',
      description:
        'Balancing camera placement and light to give every scene a clear visual mood.',
      highlights: 'Visual atmosphere',
      role: 'Cinematography'
    },
    {
      title: 'Behind the camera',
      category: 'PRODUCTION',
      image: 'assets/profile8.jpeg',
      description:
        'The practical side of filmmaking: building a shot, coordinating the setup, and capturing the moment.',
      highlights: 'On-set experience',
      role: 'Camera operator'
    },
    {
      title: 'Feature film production',
      category: 'FEATURE FILMS',
      image: 'assets/profile9.jpeg',
      description:
        'Worked as a professional Gimbal Operator on 25+ feature films, including the Pan-India movies Saaho and Sye Raa Narasimha Reddy.',
      highlights: '25+ Movies',
      role: 'Gimbal Operator'
    },
    {
      title: 'Camera operation',
      category: 'CAMERA WORK',
      image: 'assets/profile10.jpeg',
      description:
        'Operating professional camera equipment with a focus on steady framing and clear visual storytelling.',
      highlights: 'Professional camera work',
      role: 'Camera operator'
    },
    {
      title: 'Short film production',
      category: 'SHORT FILMS',
      image: 'assets/profile11.jpeg',
      description:
        'Worked as Director of Photography on 70+ short films, including 5 award-winning short films, focusing on visual storytelling and cinematic lighting.',
      highlights: '70+ Short Films',
      role: 'Director of Photography'
    },
    // {
    //   title: 'Live event coverage',
    //   category: 'EVENT PRODUCTION',
    //   image: 'assets/profile12.jpeg',
    //   description:
    //     'Capturing live moments while coordinating camera coverage in a fast-moving environment.',
    //   highlights: 'Live production',
    //   role: 'Camera operator'
    // },
    {
      title: 'Field cinematography',
      category: 'LOCATION WORK',
      image: 'assets/profile13.jpeg',
      description:
        'Taking a considered camera approach to outdoor locations and changing natural light.',
      highlights: 'On-location shoots',
      role: 'Cinematography'
    },
    // {
    //   title: 'Camera and lighting setup',
    //   category: 'PRODUCTION',
    //   image: 'assets/profile14.jpeg',
    //   description:
    //     'From camera placement to the final frame, every detail supports the visual story.',
    //   highlights: 'On-set production',
    //   role: 'Camera team'
    // }
  ];

  get displayedSkills() {
    return this.showAllSkills
      ? this.technicalSkills
      : this.technicalSkills.slice(0, 8);
  }

  toggleSkills(): void {
    this.showAllSkills = !this.showAllSkills;
  }

  get dispayData() {
    return this.showAll ? this.shoots : this.shoots.slice(0, 6);
  }

  toggleData(): void {
    this.showAll = !this.showAll;
  }
}
