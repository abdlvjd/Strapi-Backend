'use strict';

module.exports = {
  async bootstrap({ strapi }) {
    const activities = [
      {
        title: 'Arts & Culture',
        label: 'Creativity',
        description:
          'We nurture creativity and self-expression through painting, music, dance, and theatre, allowing students to explore their artistic talents and cultural heritage.',
      },
      {
        title: 'STEM & Robotics',
        label: 'Innovation',
        description:
          'Our cutting-edge STEM and robotics programs include coding, AI projects, and hands-on science experiments, encouraging innovation, problem-solving, and critical thinking.',
      },
      {
        title: 'Clubs & Leadership',
        label: 'Leadership',
        description:
          'Students can join debate clubs, environmental initiatives, and community service projects, building confidence, communication skills, and a sense of social responsibility.',
      },
      {
        title: 'Global Exposure',
        label: 'Perspective',
        description:
          'Through international competitions, cultural exchange programs, and collaborative projects with global institutions, our students gain valuable global perspectives, preparing them to thrive in a connected and competitive world.',
      },
      {
        title: 'International Collaboration',
        label: 'Global',
        description:
          'Through partnerships with global institutions, our students engage in international projects, competitions, and cultural exchange programs. This exposure helps them develop a global outlook and cross-cultural understanding.',
      },
      {
        title: 'Affordable & Accessible Education',
        label: 'Value',
        description:
          'We believe that quality education should be accessible to all families. Our competitive and affordable fee structure ensures that every student receives a world-class education without compromise, balancing value and excellence.',
      },
    ];

    for (const activity of activities) {
      const existing = await strapi.db.query('api::activity.activity').findOne({
        where: { title: activity.title },
      });

      if (!existing) {
        await strapi.entityService.create('api::activity.activity', {
          data: {
            ...activity,
            publishedAt: new Date(),
          },
        });
      } else {
        // 👇 Update if already exists
        await strapi.entityService.update('api::activity.activity', existing.id, {
          data: {
            title: activity.title,
            label: activity.label,
            description: activity.description,
          },
        });
      }
    }
    // ─── About Page Seeding ──────────────────────────────────────────────────
    const aboutPage = await strapi.db.query('api::about-page.about-page').findOne();
    const aboutData = {
      yearsOfExcellence: 16,
      yearsOfExcellenceLabel: 'Years of Excellence',
      brightStudents: 500,
      brightStudentsLabel: 'Bright Students',
      expertTeachers: 40,
      expertTeachersLabel: 'Expert Teachers',
      identityLabel: 'Our Identity',
      identityHeading: 'Dedicated to Holistic, World-Class Education',
      identityTagline: "Future Gate Indian School Sharjah — where every child's potential is recognised, nurtured, and celebrated.",
      introParagraphs: [
        "At Future Gate, we are dedicated to providing a holistic, world-class education that seamlessly blends innovation, academic excellence, creativity, and moral values. Our school, located in the heart of Sharjah, is designed to be a modern, safe, and inspiring learning environment where students are encouraged to explore, discover, and excel across academics, technology, arts, and sports. We take pride in integrating the rich heritage and culture of the UAE into our curriculum, ensuring that students remain connected to their roots while embracing global perspectives. From interactive classrooms and AI-enabled learning labs to robotics, digital innovation programs, and international collaborations, our students are equipped with the skills and confidence needed to succeed in the digital, knowledge-driven world.",
        "Our mission is to nurture young minds into responsible, compassionate, and confident leaders of tomorrow. At Future Gate, we focus not only on academic success but also on character-building, ethical thinking, and emotional intelligence, preparing students to face challenges with resilience, creativity, and integrity.",
        "Here, education goes beyond textbooks. Every child is given the opportunity to unleash their potential, discover their passions, and engage in extracurricular activities that build teamwork, leadership, and global awareness."
      ],
      missionStatement: 'Our mission is to nurture young minds into responsible, compassionate, and confident leaders.',
      principalName: 'Principal',
      principalTitle: 'Future Gate Indian School Sharjah',
      principalQuote: '"At Future Gate, we believe that every child is unique, brimming with potential, and capable of achieving greatness."',
      principalMessage: 'Our vision is to provide an inspiring, nurturing, and supportive learning environment where students can grow academically, socially, and emotionally. We focus on developing not just knowledge and skills, but also character, integrity, and resilience, ensuring that each student emerges as a confident, responsible, and compassionate global citizen. At Future Gate, learning goes beyond textbooks. We encourage students to explore their passions, engage in creative thinking, and embrace challenges. Through a combination of modern technology, innovative teaching methods, and value-based education, we aim to prepare them for the demands of a rapidly changing world. Every day, our dedicated faculty works to unlock the potential in every student, guiding them to become lifelong learners, ethical leaders, and innovators of tomorrow. We take pride in creating an environment where curiosity is celebrated, talents are nurtured, and dreams are realized.',
      directorName: 'Director',
      directorTitle: 'Future Gate Indian School Sharjah',
      directorQuote: '"At Future Gate, our mission is to create a school that seamlessly blends tradition with innovation."',
      directorMessage: 'We take pride in combining UAE heritage and cultural values with modern teaching methods and global best practices. Our focus is on academic excellence, ethical development, and holistic growth, ensuring that students not only achieve outstanding results but also develop strong character, leadership skills, and a sense of responsibility. At Future Gate, we provide numerous opportunities for students to explore their interests and passions—from technology, arts, and sports to research and global collaborations. By nurturing creativity, curiosity, and critical thinking, we aim to prepare students to thrive in a rapidly evolving world while remaining deeply connected to their roots. We are committed to guiding every student toward personal and academic success, helping them become innovators, leaders, and compassionate global citizens who can make a meaningful impact on the world.',
      publishedAt: new Date(),
    };

    if (!aboutPage) {
      await strapi.entityService.create('api::about-page.about-page', {
        data: aboutData,
      });
    } else {
      await strapi.entityService.update('api::about-page.about-page', aboutPage.id, {
        data: aboutData,
      });
    }

    // ─── Co-Curricular Page Seeding (New Unified API) ───────────────────────
    const coCurricularPageNew = await strapi.db.query('api::co-curricular.co-curricular').findOne();
    const coCurricularDataNew = {
      heroEyebrow: 'Future Gate Indian School',
      headlineAccent: 'Beyond the Classroom',
      headline: 'Developing talents, character & global citizens through world-class co-curricular programmes.',

      introLabel: 'Holistic Growth',
      introHeading: 'Nurturing the Whole Child',
      introParagraph1: 'At Future Gate, we believe that learning extends beyond the classroom. Our Co-curricular programs are designed to develop talents, leadership, teamwork, and creativity, ensuring every student grows into a well-rounded individual.',
      benefits: [
        'Builds critical thinking & creativity',
        'Develops leadership & communication skills',
        'Fosters teamwork & social responsibility',
        'Enhances physical fitness & well-being',
      ],
      stat1Value: '20+',
      stat1Label: 'Clubs & Activities',
      stat2Value: '500+',
      stat2Label: 'Active Participants',
      stat3Value: '15+',
      stat3Label: 'Awards Won',
      stat4Value: '10+',
      stat4Label: 'Annual Events',
      publishedAt: new Date(),
    };

    if (!coCurricularPageNew) {
      await strapi.entityService.create('api::co-curricular.co-curricular', {
        data: coCurricularDataNew,
      });
    } else {
      await strapi.entityService.update('api::co-curricular.co-curricular', coCurricularPageNew.id, {
        data: coCurricularDataNew,
      });
    }

    // ─── Co-Curricular Page Seeding ──────────────────────────────────────────
    const coCurricularPage = await strapi.db.query('api::co-curricular-activity.co-curricular-activity').findOne();
    const coCurricularData = {
      heroEyebrow: 'Future Gate Indian School',
      headlineAccent: 'Beyond the Classroom',
      headline: 'Developing talents, character & global citizens through world-class co-curricular programmes.',      introLabel: 'Holistic Growth',
      introHeading: 'Nurturing the Whole Child',
      introParagraph1: 'At Future Gate, we believe that learning extends beyond the classroom. Our Co-curricular programs are designed to develop talents, leadership, teamwork, and creativity, ensuring every student grows into a well-rounded individual.',
      benefits: [
        'Builds critical thinking & creativity',
        'Develops leadership & communication skills',
        'Fosters teamwork & social responsibility',
        'Enhances physical fitness & well-being',
      ],
      stat1Value: '20+',
      stat1Label: 'Clubs & Activities',
      stat2Value: '500+',
      stat2Label: 'Active Participants',
      stat3Value: '15+',
      stat3Label: 'Awards Won',
      stat4Value: '10+',
      stat4Label: 'Annual Events',
      publishedAt: new Date(),
    };

    if (!coCurricularPage) {
      await strapi.entityService.create('api::co-curricular-activity.co-curricular-activity', {
        data: coCurricularData,
      });
    } else {
      await strapi.entityService.update('api::co-curricular-activity.co-curricular-activity', coCurricularPage.id, {
        data: coCurricularData,
      });
    }

    // ─── Grant Public Permissions ──────────────────────────────────────────
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });

    if (publicRole) {
      const permissionsToGrant = [
        'api::contact-submission.contact-submission.create',
        'api::contact-submission.contact-submission.find',
        'api::career-submission.career-submission.create',
        'api::career-submission.career-submission.find',
      ];

      for (const action of permissionsToGrant) {
        const existingPermission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: {
            action,
            role: publicRole.id,
          },
        });

        if (!existingPermission) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action,
              role: publicRole.id,
            },
          });
        }
      }
    }
  },
};