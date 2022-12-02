import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

function timeUpdate(data) {
  localStorage.setItem(localStorageKey, data.seconds);
}
player.on('timeupdate', throttle(timeUpdate, 1000));
player.setCurrentTime(localStorage.getItem(localStorageKey));
