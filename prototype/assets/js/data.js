const DEFAULT_EVENTS = [
  {
    id: 1,
    title: "Campus Innovation & Startup Fair 2026",
    category: "Academic",
    date: "2026-08-12",
    time: "09:00 AM - 04:00 PM",
    location: "University Convention Hall",
    capacity: 250,
    organizer: "Innovation and Entrepreneurship Center",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    description: "Meet student founders, explore new ideas, attend short talks, and connect with mentors from the startup community.",
    status: "Open"
  },
  {
    id: 2,
    title: "International Culture Night",
    category: "Culture",
    date: "2026-08-20",
    time: "05:30 PM - 09:00 PM",
    location: "Student Activity Center",
    capacity: 400,
    organizer: "International Student Office",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80",
    description: "Celebrate the diversity of our campus through food, music, traditional clothing, performances, and student-led activities.",
    status: "Open"
  },
  {
    id: 3,
    title: "Career Readiness Workshop",
    category: "Career",
    date: "2026-08-25",
    time: "01:00 PM - 04:00 PM",
    location: "Library Seminar Room 2",
    capacity: 80,
    organizer: "Career Development Center",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    description: "Improve your CV, LinkedIn profile, interview confidence, and professional communication with practical coaching.",
    status: "Open"
  },
  {
    id: 4,
    title: "University Sports Festival",
    category: "Sports",
    date: "2026-09-05",
    time: "08:00 AM - 06:00 PM",
    location: "Main Sports Complex",
    capacity: 600,
    organizer: "Sports and Recreation Department",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    description: "Join friendly competitions, support your faculty teams, and enjoy games, food booths, and outdoor activities.",
    status: "Open"
  },
  {
    id: 5,
    title: "Mental Wellness Awareness Talk",
    category: "Wellness",
    date: "2026-07-10",
    time: "02:00 PM - 04:00 PM",
    location: "Auditorium B",
    capacity: 120,
    organizer: "Student Wellness Center",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    description: "A supportive session about stress management, mental health resources, and building healthier study routines.",
    status: "Ended"
  },
  {
    id: 6,
    title: "Volunteer for Community Day",
    category: "Community",
    date: "2026-09-12",
    time: "07:30 AM - 03:00 PM",
    location: "Meet at Gate 2",
    capacity: 100,
    organizer: "Student Volunteer Network",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    description: "Spend a day supporting local communities through educational, environmental, and public-space improvement activities.",
    status: "Open"
  }
];

function seedData() {
  if (!localStorage.getItem('sceh_events')) localStorage.setItem('sceh_events', JSON.stringify(DEFAULT_EVENTS));
  if (!localStorage.getItem('sceh_users')) {
    localStorage.setItem('sceh_users', JSON.stringify([
      { id: 1, name: 'Admin User', email: 'admin@campus.edu', password: 'admin123', role: 'admin', joinedAt: new Date().toISOString() },
      { id: 2, name: 'Demo Student', studentId: 'RSU6500001', major: 'Information Technology', email: 'student@campus.edu', password: 'student123', role: 'student', joinedAt: new Date().toISOString() }
    ]));
  }
  if (!localStorage.getItem('sceh_registrations')) localStorage.setItem('sceh_registrations', '[]');
  if (!localStorage.getItem('sceh_reviews')) localStorage.setItem('sceh_reviews', JSON.stringify([
    { id: 1, eventId: 5, userId: 2, userName: 'Demo Student', rating: 5, comment: 'The session was practical and easy to understand.', createdAt: '2026-07-11T10:00:00.000Z', status: 'Approved' }
  ]));
}

seedData();
