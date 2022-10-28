const $ = document.querySelector.bind(document) 
const $$ = document.querySelectorAll.bind(document) 


const PLAYER_STORAGE_KEY = 'F8_PLAYER'  


const playList = $('.playlist')
const header = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('.progress')
const playLists = $$('.song')
const cdWidth = cd.offsetWidth
const btnNext = $('.btn-next')
const btnprev = $('.btn-prev')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')
    

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
     songs: [

    {
        name: 'Cool for the summer',
        singer: 'Demi Lovato',
        path: './asset/music/Cool For The Summer.mp3',
        image: './asset/img/song1.png'
    },
    {
        name: 'Tay trái chỉ trăng',
        singer: 'Tát đỉnh đỉnh',
        path: './asset/music/Tay trái chỉ trăng.mp3',
        image: './asset/img/song2.jpg'
    },
    {
        name: 'Bailando',
        singer: 'Enrique Iglesias',
        path: './asset/music/Bailando.mp3',
        image: './asset/img/song3.jpg'
    },
    {
        name: 'Despacito',
        singer: 'Luis Fonsi',
        path: './asset/music/Despacito.mp3',
        image: './asset/img/song4.jpg'
    },
    {
        name: 'Fly Away',
        singer: 'The Fat Rat',
        path: './asset/music/Fly Away.mp3',
        image: './asset/img/song5.jpg'
    },
    {
        name: 'I Want You To Know',
        singer: 'Selena Gomez',
        path: './asset/music/I Want You To Know.mp3',
        image: './asset/img/song6.jpg'
    },
    {
        name: 'Pink Venom',
        singer: 'Black Pink',
        path: './asset/music/Pink Venom.mp3',
        image: './asset/img/song7.jpg'
    },
    {
        name: 'Nevada',
        singer: 'The Fat Rat',
        path: './asset/music/Nevada.mp3',
        image: './asset/img/song8.jpg'
    },
    {
        name: 'Oblivion',
        singer: 'Alan Waker',
        path: './asset/music/Oblivion.mp3',
        image: './asset/img/song9.jpg'
    },
    {
        name: 'Tái tạo màng trinh',
        singer: 'Phạm Thoại',
        path: './asset/music/thuoc-hoi-trinh-remix-pham-thoai.mp3',
        image: './asset/img/song10.png'
    },
    {
        name: 'Chandelier',
        singer: 'Sia',
        path: './asset/music/Chandelier - Sia.mp3',
        image: './asset/img/song11.jpg'
    },
    {
        name: 'Easy on me',
        singer: 'Adele',
        path: './asset/music/EasyOnMe-Adele-7107614.mp3',
        image: './asset/img/song12.png'
    },
    {
        name: 'Em Da Xa Anh',
        singer: 'Bibo',
        path: './asset/music/Em Da Xa Anh Bibo Remix_ - Nhu Viet_ ACV.mp3',
        image: './asset/img/song13.png'
    },
    {
        name: 'Ha Con Vuong Nang Remix',
        singer: 'DatKaa',
        path: './asset/music/Ha Con Vuong Nang Remix_ - DatKaa_ Kido.mp3',
        image: './asset/img/song14.png'
    },
    {
        name: 'Happier',
        singer: 'Marshello',
        path: './asset/music/Happier - Marshmello_ Bastille.mp3',
        image: './asset/img/song15.png'
    },
    {
        name: 'Havana',
        singer: 'Camila Cabello',
        path: './asset/music/Havana-CamilaCabelloYoungThug-5817730.mp3',
        image: './asset/img/song16.png'
    },
    {
        name: 'Hero',
        singer: 'Christina',
        path: './asset/music/HeroFeatChristinaPerri-CashCash-6430079.mp3',
        image: './asset/img/song17.png'
    },
    {
        name: 'Industry Baby',
        singer: 'Lil Nas X',
        path: './asset/music/Industry Baby - Lil Nas X_ Jack Harlow.mp3',
        image: './asset/img/song18.png'
    },
    {
        name: 'Lovely',
        singer: 'Billie Eilish',
        path: './asset/music/Lovely - Billie Eilish_ Khalid.mp3',
        image: './asset/img/song19.png'
    },
    {
        name: 'MoveYourBody',
        singer: 'Sia feats Alan Walker',
        path: './asset/music/MoveYourBodyAlanWalkerRemix-Sia-4633854.mp3',
        image: './asset/img/song20.png'
    },
    {
        name: 'Ngày Đầu Tiên',
        singer: 'Đức Phúc',
        path: './asset/music/NgayDauTien-DucPhuc-7129810.mp3',
        image: './asset/img/song21.png'
    },
    {
        name: 'NgayThoPhong',
        singer: 'Tăng Duy Tân',
        path: './asset/music/NgayThoPhongMaxRemix-TangDuyTan-6689614.mp3',
        image: './asset/img/song22.png'
    },
    {
        name: 'On The Ground',
        singer: 'Rose',
        path: './asset/music/On The Ground - Rose.mp3',
        image: './asset/img/song23.png'
    },
    {
        name: 'Play Date',
        singer: 'Melanie Martinez',
        path: './asset/music/Play Date - Melanie Martinez.mp3',
        image: './asset/img/song24.png'
    },
    {
        name: 'Positions',
        singer: 'Ariana Grande',
        path: './asset/music/Positions - Ariana Grande.mp3',
        image: './asset/img/song25.png'
    },
    {
        name: 'Rather Be',
        singer: 'Jess Glynne',
        path: './asset/music/Rather Be - Clean Bandit_ Jess Glynne.mp3',
        image: './asset/img/song26.png'
    },
    {
        name: 'Set Fire To The Rain',
        singer: 'Adele',
        path: './asset/music/Set Fire To The Rain - Adele.mp3',
        image: './asset/img/song27.png'
    },
    {
        name: 'That\'s What I Want',
        singer: 'Lil Nas X',
        path: './asset/music/That_s What I Want - Lil Nas X.mp3',
        image: './asset/img/song28.png'
    },
    {
        name: 'Stay',
        singer: 'Justin Bieber',
        path: './asset/music/Stay - The Kid LAROI_ Justin Bieber.mp3',
        image: './asset/img/song29.jpg'
    },
    {
        name: 'Huynh De Oi',
        singer: 'Htrol',
        path: './asset/music/Huynh De Oi Toi Nho Anh Htrol Remix - Ca.mp3',
        image: './asset/img/song30.jpg'
    }
],
    
  

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    

    render: function() {
     
       var htmls =  this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index= "${index}">
                 <div class="thumb" style="background-image: ${song.image}"></div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                     <i class="fas fa-ellipsis-h"></i>
                </div>
             </div>
          `
        })

        playList.innerHTML = htmls.join('')
    },

    handleEvent: function() {
        document.onscroll = function() {
            if (window.scrollY || document.documentElement.scrollTop) {
                const newCdWidth = cdWidth - window.scrollY 
                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
                cd.style.opacity = newCdWidth / cdWidth
            }
        }

            const cdThumbAnimate = cdThumb.animate([
                { transform: 'rotate(360deg)' }
            ], {
                duration: 10000,
                iterations: Infinity
            } )
            
            cdThumbAnimate.pause()
            

        playBtn.onclick = function() {
            if (app.isPlaying) {
                audio.pause()
            }
            else {
                 audio.play()
            }
        }

        audio.onplay = function() {
            cdThumbAnimate.play()
            app.isPlaying = true
            player.classList.add('playing')
        }

        audio.onpause = function() {
            cdThumbAnimate.pause()
            app.isPlaying = false
            player.classList.remove('playing')
        }

        audio.ontimeupdate = function() {
            if (audio.duration){
            const progressPercent = this.currentTime / audio.duration * 100
            progress.value = progressPercent
            }
        }

        progress.oninput = function() {
            const seekTime = progress.value / 100 * audio.duration
            audio.currentTime = seekTime
        }

        btnNext.onclick = function() {
            if (app.isRandom) {
                app.songRandom()
            }
            else {
                app.nextSong()
            }
            audio.play()
            app.render()
           app.scrollToActiveSong()
            
        }

        btnprev.onclick = function() {
            if (app.isRandom) {
                app.songRandom()
            }
            else 
           {
            app.prevSong() 
           }
           audio.play()
           app.render()
           app.scrollToActiveSong()
            }

        btnRandom.onclick = function(){
            app.isRandom = !app.isRandom
            btnRandom.classList.toggle('active')
        }

        audio.onended = function() {
            if (app.isRepeat) {
                audio.play()
            }   
            else {
                btnNext.click()
            }         
        }

        btnRepeat.onclick = function() {
            app.isRepeat = !app.isRepeat
            btnRepeat.classList.toggle('active')
                    
        }

        playList.onclick = function(e) {
            const songNote = e.target.closest ('.song:not(.active')
            if (songNote  || e.target.closest('.option')) {
                if (songNote) {
                    app.currentIndex = Number(songNote.dataset.index)
                    app.loadCurrentSong()
                    audio.play()
                    app.render()
                }
            }
        }

    },

    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }

        app.loadCurrentSong()

    },

    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) this.currentIndex = this.songs.length - 1
        this.loadCurrentSong()
    },

    songRandom() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() *this.songs.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()

    },

    loadCurrentSong: function() {
        header.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

 



    scrollToActiveSong: function () {
       setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
       }, 300)
    },

    start: function() {
        this.defineProperties()
        this.loadCurrentSong()
        this.handleEvent()
        this.render()
    
  }

}


app.start()
    





