// import { render, screen, fireEvent } from '@testing-library/react';
// import { App } from './App';

// // כאן אנחנו מחקים את axios כך שלא נצטרך להתחבר לשרת
// vi.mock('axios', () => ({
//   get: jest.fn(() =>
//     Promise.resolve({
//       data: [
//         { name: 'Queue 1', messageCount: 3 },
//         { name: 'Queue 2', messageCount: 5 },
//       ],
//     })
//   ),
// }));

// describe('App Component', () => {
//   it('renders the queues table correctly', async () => {
//     render(<App />);

//     // מחכים שהטבלה תטען
//     const queue1 = await screen.findByText('Queue 1');
//     const queue2 = await screen.findByText('Queue 2');

//     // בודקים אם שמות התורים מוצגים
//     expect(queue1).toBeInTheDocument();
//     expect(queue2).toBeInTheDocument();
//   });

//   it('displays the message when "Go" button is clicked', async () => {
//     render(<App />);

//     // מחכים שהכפתור "Go" יהיה זמין
//     const goButton = screen.getByText('Go');
//     fireEvent.click(goButton);

//     // נוודא שההודעה מוצגת לאחר קליק
//     const message = await screen.findByText('Message:');
//     expect(message).toBeInTheDocument();
//   });
// });
