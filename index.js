const teuton_lords = ['Andreas', 'Hermann', 'Heinrich', 'Knud&Abel', 'Rudolf', 'Yaroslav']
const russian_lords = ['Aleksandr', 'Andrey', 'Domash', 'Gavrilo', 'Vladislav', 'Karelians']
const map = {
    'Warbola': { trackways: ['Reval', 'Harrien', 'Leal'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[83, 346]},
    'Reval' : { trackways: ['Warbola', 'Revala'], waterways : [], teuton: true, seats: ['Knud&Abel'], commandery: false, stronghold: true, port: true, coords:[153, 290]},
    'Revala' : { trackways: ['Reval', 'Wesenberg'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[251, 283]},
    'Wesenberg' : { trackways: ['Revala', 'Jerwen', 'Wierland'], waterways : [], teuton: true, seats: ['Knud&Abel'], commandery: false, stronghold: true, port: false, coords:[350, 309]},
    'Wierland' : { trackways: ['Wesenberg', 'Narwia', 'Waiga'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[460,343]},
    'Narwia' : { trackways: ['Wierland', 'Kaibolovo'], waterways : ['Dorpat', 'Gdov', 'Uzmen', 'Plyussa River'], teuton: true, seats: [], commandery: false, stronghold: false, port: true, coords:[531,292]},
    'Harrien' : { trackways: ['Warbola', 'Jerwen'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[152, 410]},
    'Jerwen' : { trackways: ['Harrien', 'Wesenberg'], waterways : ['Pernau', 'Fellin'], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[257,398]},
    'Waiga' : { trackways: ['Wierland', 'Dorpat'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[361,453]},
    'Leal' : { trackways: ['Warbola', 'Pernau'], waterways : [], teuton: true, seats: ['Heinrich'], commandery: true, stronghold: true, port: true, coords:[47, 444]},
    'Pernau' : { trackways: ['Leal'], waterways : ['Jerwen', 'Fellin'], teuton: true, seats: [], commandery: false, stronghold: false, port: true, coords:[128, 511]},
    'Fellin' : { trackways: [], waterways : ['Pernau', 'Jerwen', 'Dorpat', 'Odenpah'], teuton: true, seats: [], commandery: true, stronghold: true, port: false, coords:[242, 515]},
    'Dorpat' : { trackways: ['Odenpah', 'Ugaunia'], waterways : ['Fellin', 'Odenpah', 'Narwia', 'Gdov', 'Uzmen'], teuton: true, seats: ['Hermann'], commandery: false, stronghold: true, port: false, coords:[381, 510]},
    'Sackala' : { trackways: ['Fellin', 'Metsepole'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[158, 577]},
    'Odenpah' : { trackways: ['Dorpat', 'Ugaunia', 'Kirrumpah'], waterways : ['Fellin', 'Dorpat'], teuton: true, seats: ['Hermann', 'Yaroslav'], commandery: false, stronghold: true, port: false, coords:[328, 626]},
    'Ugaunia' : { trackways: ['Dorpat', 'Odenpah', 'Uzmen', 'Izborsk'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[454, 617]},
    'Metsepole' : { trackways: ['Sackala', 'Wenden'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[137, 677]},
    'Kirrumpah' : { trackways: ['Odenpah', 'Izborsk', 'Adsel'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[429, 691]},
    'Wenden' : { trackways: ['Metsepole', 'Tolowa'], waterways : ['Riga', 'Adsel'], teuton: true, seats: ['Andreas', 'Rudolf'], commandery: true, stronghold: true, port: false, coords:[224, 770]},
    'Adsel' : { trackways: ['Kirrumpah', 'Lettgallia', 'Tolowa'], waterways : ['Wenden'], teuton: true, seats: [], commandery: true, stronghold: true, port: false, coords:[349, 739]},
    'Lettgallia' : { trackways: ['Adsel', 'Tolowa', 'Izborsk', 'Rositten', 'Ostrov'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[469, 795]},
    'Riga' : { trackways: [], waterways : ['Wenden'], teuton: true, seats: ['Andreas'], commandery: false, stronghold: true, port: true, coords:[84, 869]},
    'Tolowa' : { trackways: ['Wenden', 'Adsel', 'Lettgallia', 'Rositten'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[362, 832]},
    'Rositten' : { trackways: ['Tolowa', 'Lettgallia'], waterways : [], teuton: true, seats: [], commandery: false, stronghold: false, port: false, coords:[463, 888]},

    'Karelia' : { trackways: ['Neva'], waterways : [], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[856, 68]},
    'Luga' : { trackways: [], waterways : ['Kaibolovo'], teuton: false, seats: [], commandery: false, stronghold: false, port: true, coords:[597, 240]},
    'Kaibolovo' : { trackways: ['Narwia', 'Koporye'], waterways : ['Luga', 'Zheltsy'], teuton: false, seats: [], commandery: false, stronghold: true, port: false, coords:[664, 289]},
    'Koporye' : { trackways: ['Kaibolovo', 'Vod'], waterways : [], teuton: false, seats: [], commandery: false, stronghold: true, port: true, coords:[708, 214]},
    'Neva' : { trackways: ['Karelia', 'Vod', 'Izhora'], waterways : ['Ladoga'], teuton: false, seats: [], commandery: false, stronghold: false, port: true, coords:[868, 160]},
    'Ladoga' : { trackways: ['Izhora'], waterways : ['Neva', 'Volkhov'], teuton: false, seats: ['Vladislav', 'Karelians'], commandery: false, stronghold: true, port: false, coords:[1029, 126]},
    'Vod' : { trackways: ['Koporye', 'Neva', 'Ingria'], waterways : [], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[781, 270]},
    'Izhora' : { trackways: ['Neva', 'Ladoga', 'Ingria'], waterways : [], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[911, 267]},
    'Ingria' : { trackways: ['Vod', 'Izhora', 'Tesovo'], waterways : [], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[853, 334]},
    'Volkhov' : { trackways: [], waterways : ['Ladoga', 'Novgorod'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[1024, 345]},
    'Gdov' : { trackways: ['Plyussa River'], waterways : ['Narwia', 'Dorpat', 'Uzmen'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[539, 421]},
    'Plyussa River' : { trackways: ['Gdov', 'Zheltsy', 'Zhelcha River'], waterways : ['Narwia'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[640, 462]},
    'Zheltsy' : { trackways: ['Plyussa River'], waterways : ['Kaibolovo', 'Tesovo', 'Sablia'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[775, 429]},
    'Tesovo' : { trackways: ['Ingria', 'Novgorod'], waterways : ['Zheltsy'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[869, 411]},
    'Novgorod' : { trackways: ['Tesovo', 'Sablia'], waterways : ['Volkhov', 'Shelon River', 'Rusa'], teuton: false, seats: ['Aleksander', 'Andrey', 'Domash'], commandery: false, stronghold: true, port: false, coords:[975, 448]},
    'Uzmen' : { trackways: ['Ugaunia'], waterways : ['Dorpat', 'Narwia', 'Gdov', 'Zhelcha River', 'Pskov'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[485, 565]},
    'Zhelcha River' : { trackways: ['Plyussa River', 'Pskov'], waterways : ['Uzmen'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[629, 539]},
    'Sablia' : { trackways: ['Novgorod', 'Shelon River'], waterways : ['Zheltsy'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[835, 509]},
    'Pskov' : { trackways: ['Izborsk', 'Zhelcha River', 'Dubrovno'], waterways : ['Uzmen', 'Ostrov'], teuton: false, seats: ['Yaroslav', 'Gavrilo'], commandery: false, stronghold: true, port: false, coords:[606, 659]},
    'Dubrovno' : { trackways: ['Pskov', 'Porkhov'], waterways : ['Shelon River'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[703, 655]},
    'Shelon River' : { trackways: ['Sablia'], waterways : ['Dubrovno', 'Porkhov', 'Novgorod', 'Rusa'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[822, 601]},
    'Rusa' : { trackways: [], waterways : ['Shelon River', 'Novgorod', 'Lovat'], teuton: false, seats: ['Aleksander', 'Andrey'], commandery: false, stronghold: true, port: false, coords:[962, 633]},
    'Izborsk' : { trackways: ['Ugaunia', 'Kirrumpah', 'Lettgallia', 'Pskov'], waterways : [], teuton: false, seats: [], commandery: false, stronghold: true, port: false, coords:[516, 701]},
    'Porkhov' : { trackways: ['Dubrovno', 'Sorot River'], waterways : ['Shelon River'], teuton: false, seats: [], commandery: false, stronghold: true, port: false, coords:[792, 709]},
    'Lovat' : { trackways: [], waterways : ['Rusa', 'Velikiye Luki'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[942, 735]},
    'Ostrov' : { trackways: ['Lettgallia'], waterways : ['Pskov', 'Velikaya River'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[611, 762]},
    'Sorot River' : { trackways: ['Porkhov'], waterways : ['Velikaya River'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[741, 796]},
    'Velikaya River' : { trackways: ['Velikiye Luki'], waterways : ['Ostrov', 'Sorot River'], teuton: false, seats: [], commandery: false, stronghold: false, port: false, coords:[683, 864]},
    'Velikiye Luki' : { trackways: ['Velikaya River'], waterways : ['Lovat'], teuton: false, seats: [], commandery: false, stronghold: true, port: false, coords:[844, 900]},
 }

 // enemy locales that are besieged by a friendly or conquered by a friendly, can trace supply
// OR friendly locales with an enemy lord or conquered by an enemy, can't trace supply
var inverted_side_locales = []; 
var start = "Wenden"; // start locale, string

var carts = 0;
var boats = 0;
var sleds = 0;
var ships = 0;
var teuton = true; // whether playing the teutons instead of russians, bool
var lord = "Andreas"
var bonus = false; // whether the bonus card is active, bool

// if initial is true, returns a tuple containing:
// an array of routes needed to reach the maximum provender per action
// an int representing maximum provender per action

// if initial is false, instead returns an array of routes that end at a possible supply source
function get_supply(carts = this.carts, boats = this.boats, sleds = this.sleds, ships = this.ships, start = this.start, 
teuton = this.teuton, lord = this.lord, bonus = this.bonus, already_visited = [], initial = true){
    let routes = []
    if(initial || !blocked(start, teuton)){
        already_visited = already_visited.slice(0) // clone the array, since they are pass by reference
        already_visited.push(start)
        
        if(carts > 0 || sleds > 0){
            for (locale of map[start].trackways){
                if(!(already_visited.includes(locale))){
                    let new_routes = get_supply((carts > 0 ? carts -1 : 0), boats, (sleds > 0 ? sleds - 1 : 0), ships, locale, teuton, lord, bonus, already_visited, false)
                    for (path of new_routes){
                        routes.push([start].concat(path))
                    }
                }
            }
        }
        if(boats > 0 || sleds > 0){
            for (locale of map[start].waterways){
                if(!(already_visited.includes(locale))){
                    let new_routes = get_supply(carts, (boats > 0 ? boats - 1 : 0), (sleds > 0 ? sleds - 1 : 0), ships, locale, teuton, lord, bonus, already_visited, false)
                    for (path of new_routes){
                        routes.push([start].concat(path))
                    }
                }
            }
        }
        var result = getSources(start, lord, teuton, bonus)
        if(result.some(source => source === true)){
            routes.push([start])
        }
    }
    if(initial){

       let paths = routes.map(function(route){
           let sourceTotal = [[],[],[]]
           for (locale of route){ 
               let x = getSources(locale, lord, teuton, bonus)
               console.log(locale, x)
               for (i of [0,1,2]){
                    if(x[i]){
                        sourceTotal[i].push(locale)
                    }
                }
           }
           let seats = sourceTotal[0].length + sourceTotal[1].length
           let portsOrNovgorod = sourceTotal[2]
           return {
            'sources': sourceTotal, // a bool tuple: seat, bonus seat, port/novgorod
            'route': route,
            'sort': (seats >= 2 && portsOrNovgorod >= 1 ? 0 : seats >= 2 ? 1 : seats >= 1 && portsOrNovgorod >= 1  ? 2 : seats >= 1 ? 3 : 4) + (route.length / 10.0)
           }
        })
        paths.sort((a,b) => a.sort - b.sort)
        let seats = 0
        let portsOrNovgorod = 0
        let retRoutes = []
        let sourceTotal = [[], [], []]
        console.log(paths)
        for (path of paths){
            let newSources = false
            for(i of [0, 1, 2]){
                for(source of path.sources[i]){
                    if(!sourceTotal[i].includes(source)){
                        if(i <= 1){
                            if(seats < 2){
                                seats++
                                sourceTotal[i].push(source)
                                newSources = true
                            }
                        }else{
                            if (portsOrNovgorod < 1 && ships > 0){
                                portsOrNovgorod++
                                sourceTotal[i].push(source)
                                newSources = true
                            }
                        }
                        
                    }
                }
            }
            if(newSources){
                console.log(path)
                retRoutes.push(path.route)
            }
        }
        return [retRoutes, Math.min(seats, 2) + (portsOrNovgorod >= 1 ? Math.min(ships, 2) : 0)]
    }else{
        return routes
    }
}

function blocked(locale, teuton){
    let normally_blocked = (map[locale].stronghold && (map[locale].teuton != teuton))
    return inverted_side_locales.includes(locale) ? !normally_blocked : normally_blocked
}

// returns a bool tuple: seat, bonus seat, port/novgorod
function getSources(locale, lord, teuton, bonus){
    return [map[locale].seats.includes(lord), bonus && (teuton ? map[locale].commandery : locale === 'Novgorod'), teuton ? map[locale].port : locale === 'Novgorod']
}

function updatePath(){
    ctx = $('canvas#map_canvas').get(0).getContext('2d')
    ctx.clearRect(0, 0, 10000, 10000);
    var supply = get_supply()
    $('#prov_count').text(supply[1])
    draw_circle(start, ctx)
    let already_visited = [start]
    for(path of supply[0]){
        for(locale of path){
            if(!already_visited.includes(locale)){
                draw_circle(locale, ctx, '#FE2712', 25)
                already_visited.push(locale)
            }
        }
    }
    for(locale in map){
        if(blocked(locale, teuton)){
            draw_x(locale, ctx, '#0000ff', 25)
        }
    }
}

function draw_circle(locale, ctx = $('canvas#map_canvas').get(0).getContext('2d'), color = '#000000', radius = 30){
    let coords = map[locale].coords
    ctx.strokeStyle = color;
    ctx.beginPath()
    ctx.arc(coords[0], coords[1], radius, 0, 2*Math.PI)
    ctx.stroke()
}

function draw_x(locale, ctx = $('canvas#map_canvas').get(0).getContext('2d'), color = '#000000', radius){
    let coords = map[locale].coords
    let length = Math.sqrt(2*Math.pow(radius, 2))/2
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(coords[0] - length, coords[1] - length)
    ctx.lineTo(coords[0] + length, coords[1] + length)
    ctx.stroke();
    ctx.moveTo(coords[0] + length, coords[1] - length)
    ctx.lineTo(coords[0] - length, coords[1] + length)
    ctx.stroke();
}

$(document).ready(function() {
    $('.intvar > input').val(0)
    $(".bonus > input").prop("checked", false);
    updatePath()

    // // draw all location circles
    // for (locale in map){
    //     let x = map[locale].coords[0]
    //     let y = map[locale].coords[1]
    //     // let ctx = cm.get(0).getContext("2d")
    //     // ctx.beginPath()
    //     // ctx.arc(x, y, 30, 0, 2*Math.PI)
    //     // ctx.stroke()
    // }

    $('.intvar').change(function(event){
        var value = parseInt(event.target.value)
        if(isNaN(value)){
            alert("Value must be an integer")
            event.target.value = 0
        }else if(value < 0 || value > 8){
            alert("Cannot have less than 0 or more than 8 of an asset")
            event.target.value = value < 0 ? 0 : 8
        }else{
            if(
            (event.target.id === 'sleds' && (boats > 0 || carts > 0))
            || (['carts', 'boats'].includes(event.target.id) && (sleds > 0))){
                alert("Cannot have both sleds and carts/boats")
                event.target.value = 0
            }else{
                window[event.target.id] = value
            }
        }
        updatePath()
    })
    $('.bonus').change(function(){
        bonus = !bonus
        updatePath()
    })
    $('div.lord-row > div > img').click(function(event){
        let ele = event.target.parentNode
        lord = ele.id
        $('div.lord-row > div').css('border-color', 'transparent')
        $('#' + jQuery.escapeSelector(ele.id)).css('border-color', 'black')
        if (teuton !== teuton_lords.includes(lord)){
            teuton = !teuton
            bonus = false
            $('.bonus > input').prop('checked', false)
            $('#commandery').prop('disabled', !teuton)
            $('#archbishopric').prop('disabled', teuton)
        }
        updatePath()
    })
    
    const map_canvas = $('canvas#map_canvas')
    map_canvas.on('click', function(event) {
        let x = event.pageX - this.offsetLeft
        let y = event.pageY - this.offsetTop
        for (locale in map){
            let lx = map[locale].coords[0]
            let ly = map[locale].coords[1]
            let dist = Math.sqrt(Math.pow(x-lx, 2) + Math.pow(y-ly, 2))
            if(dist < 30){
                start = locale
                updatePath()
                break
            }
        }
    });
    map_canvas.on('contextmenu', function(event) {
        event.preventDefault();
        let x = event.pageX - this.offsetLeft
        let y = event.pageY - this.offsetTop
        for (locale in map){
            let lx = map[locale].coords[0]
            let ly = map[locale].coords[1]
            let dist = Math.sqrt(Math.pow(x-lx, 2) + Math.pow(y-ly, 2))
            if(dist < 30){
                let i = inverted_side_locales.indexOf(locale)
                if(i > -1){ // array includes locale
                    inverted_side_locales.splice(i, 1)
                }else{
                    inverted_side_locales.push(locale)
                }
                updatePath();
                console.log(inverted_side_locales);
                break
            }
        }
    });

});

