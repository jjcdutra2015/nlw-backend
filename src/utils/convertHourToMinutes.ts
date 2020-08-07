export default function convertHourToMinutes(time: string) {
    const [ hour, miunutes ] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + miunutes;

    return timeInMinutes; 
}