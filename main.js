const text_timing = 10000;

    const HTML_inner_height = (window.innerHeight)
    const inner_width = window.innerWidth;
    let bodyAttributes = document.querySelector('body').setAttribute(`style`,
        `
            height: 100vh;
            width: 100vw;
            background-color: white;
        `
        )
    
        // window.addEventListener("resize", function() {
    
        //     const body = document.querySelector('body');
        //     let width = body.style.width = window.innerWidth
        //     body.style.width = `${width}px`
        //     console.log(`new width: `, width, `body-Width: `, body.style.width)
        //   });
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    function createGreenRGB() {
        const red = getRandomInt(0, 0)
        const green = getRandomInt(180, 255)
        const blue = getRandomInt(0, 0)
    
        const color = `rgb(${red}, ${green}, ${blue}, ${getRandomInt(1, 1)})`
    
        return color
    }
    
    function randomRGB() {
        const red = getRandomInt(0, 250)
        const green = getRandomInt(0, 250)
        const blue = getRandomInt(0, 250)
    
        const color = `rgb(${red}, ${green}, ${blue})`
    
        return color
    }
    
    function randomRGBO(number1, number2) {
    
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
    
        const red = getRandomInt(0, 250)
        const green = getRandomInt(0, 250)
        const blue = getRandomInt(0, 250)
        const opacity = getRandomArbitrary(number1, number2).toFixed(2)
    
        const color = `rgb(${red}, ${green}, ${blue}, ${opacity})`
    
        return color
    }
    
    a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789人類社会のすべてyz023456789人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは"
    b = "世界における自由正義及び平和の礎であるので人権のہ無視及び軽侮が人類の良心を踏みにじった野蛮行為をもたらし言論及び信仰の自由が受けられ恐怖及び欠乏のない世界の到来が一般の人々の最高の願望とし"
    c = ""
    d = "て宣言されたので人間が専制と圧迫とに対する最後の手段として反逆に訴えることがない0うにするためには法の支配に0って人権を保護することが肝要であるので諸国間の友好関係の発展を促進することが肝要であ"
    e = "るので国際連合の"
    f = "諸国民は国連憲章において本的人権人間の尊厳及び価る値並びに男女の同権についての信念を再確認しかつ一層大きな自由のうちで社会的進歩と生活水準の向上とを促決意したので加盟国は国際連合と協力して"
    g = "進することを決意したので加盟国は国際連合と協力して人権及び本的自由の普遍的な尊重及び遵守の促進を達す成することを誓約したのでこれらの権利及び自由に対する共通の理解はこの誓約を完全にするためにもっとも重"
    h = "要であるので0っここに国連総会は社会の各個人及び各機関がこの世界人権宣言を常に念頭に置きながら加盟国自身の人民の間にもまた加盟国の管轄下にある地域の人民の間にもこれらの権利と自由との尊重を指導及び教育" 
    i = "に0って促進すること並びにそれらの普遍的措置に0って確保することに努力する0うにすべての人民とすべての国とが達成すべき共通の準としてこの人権宣言を公す布すABCDEFGHIJKLMNOPQRSTUVYZabcdefghijklmnopqrstuvwxyz"
    j = "!@#$%^&*()_+=-~n/n|/*-+."
    
    const k = a + b + c + d + e + f + g + h + i + j
    
    const array = k.split('')
    
    function addNumbers(length) {
        let z = 0;
          const array = []
      
          while (z < length) {
            for (let i = 0; i < 10; i++) {
                array.push(i)
            }
            z++
          }
          return array
    }
    // combined fonts into one array - Matrix_Fonts
    Matrix_Fonts = array.concat(addNumbers(array.length / 10))
    
    //setting CSS on columns
    function columnAttributes() {
    
        const column_node_list = document.querySelectorAll('.columns')
        
        for (let i = 0; i < column_node_list.length; i++) {
            const id = column_node_list[i].id
            const column = document.querySelector('#' + id);
    
            column.setAttribute('style', 
            `
            width: 20%;
            height: 100%;
            background-color: black;
            display: flex;
            flex-wrap: wrap;
            `
            )
        }
    }
    columnAttributes();
    
    // const column_inner_width = document.querySelector('.columns').clientWidth 
    const create_div_blocks = function(number, border_color) {
    const a = 0;
            const array = []
    
            for (let i = 0; i < number; i++) {
                const div_block = document.createElement('div');
                div_block.className = 'text_block';
                div_block.id = 'text_block' + i;
                div_block.setAttribute(`style`, 
                `
                    height: 5%;
                    width: 50%;
                    border-right: 1px solid ${border_color};
                    border-left: 1px solid ${border_color};  
                    border-top: 1px solid ${border_color}; 
                    border-bottom: 1px solid ${border_color}; 
                    box-sizing: border-box;
                `
                )
                array.push(div_block)
            }
            
            return array;
    
    }
    
    function fill_columns_with_text_blocks() {
        const blocks = create_div_blocks(400, `rgba(0, 42, 0, 0.3)`)
        
        const column_01 = document.querySelector('#column_01');
        const column_02 = document.querySelector('#column_02');
        const column_03 = document.querySelector('#column_03');
        const column_04 = document.querySelector('#column_04');
        const column_05 = document.querySelector('#column_05');
        const column_06 = document.querySelector('#column_06');
        const column_07 = document.querySelector('#column_07');
        const column_08 = document.querySelector('#column_08');
        const column_09 = document.querySelector('#column_09');
        const column_10 = document.querySelector('#column_10');
    
        for (let i = 0; i <= 399; i++) {
    
            if (i <= 39) {column_01.appendChild(blocks[i])}
            if (i >= 40 && i <= 79) {column_02.appendChild(blocks[i])}
            if (i >= 80 && i <= 120) {column_03.appendChild(blocks[i])}
            if (i >= 120 && i <= 160) {column_04.appendChild(blocks[i])}
            if (i >= 160 && i <= 200) {column_05.appendChild(blocks[i])}
            if (i >= 200 && i <= 240) {column_06.appendChild(blocks[i])}
            if (i >= 240 && i <= 280) {column_07.appendChild(blocks[i])}
            if (i >= 280 && i <= 320) {column_08.appendChild(blocks[i])}
            if (i >= 320 && i <= 360) {column_09.appendChild(blocks[i])}
            if (i >= 360 && i < 400) {column_10.appendChild(blocks[i])}
        }
    }
    fill_columns_with_text_blocks()
    
    const addText = function () {
        const node_list_array = document.querySelectorAll('.text_block');
    
        for (let i = 0; i < node_list_array.length; i++) {
            let random_number = getRandomInt(0, Matrix_Fonts.length);
            const id = node_list_array[i].id
            const block = document.querySelector(`#` + id);
    
            const para = document.createElement('p')
                para.className = 'para_text'
                para.id = 'para_text_' + i
                block.appendChild(para)
    
            para.textContent = Matrix_Fonts[random_number];
        }
    
    }
    addText()
    
    const array_delay = new Array(400).fill(0);
    const array_runTime = new Array(400).fill(0)
    const text_array = [];

    const children_child_nodes = document.querySelectorAll('.text_block');
    for (let i = 0; i < children_child_nodes.length; i++) {
        const id = children_child_nodes[i].id
        const element = document.querySelector('#' + id);
        text_array.push(element);
    }

// getRandomInt()

    const ch_tx = function () {
        // Matrix Fonts Length = 1538
        for (let i = 0; i < text_array.length; i++) {
            const box = text_array[i]
            const change = function() {
            let random_number_2 = getRandomInt(0, text_array.length);
            let random_number_3 = getRandomInt(0, Matrix_Fonts.length);
                text_array[random_number_2].textContent = Matrix_Fonts[random_number_3];
            }
            if (i < 50) { setInterval(change, getRandomInt(50, 250)) }
            if (i > 50) {setInterval(change, getRandomInt(10000, 15000))}
            change()
        }
    }
    ch_tx()
    setInterval(ch_tx, 15000)
    
    const animateBorders = function() {
        const borders_node_list = document.querySelectorAll('.text_block');
        const array = [];
        for (let i = 0; i < borders_node_list.length; i++) {
            const id = borders_node_list[i].id
            const element = document.querySelector('#' + id)
            array.push(element)
        }   
        const options = {
            duration: 10000,
            fill: "forwards",
        }  
        const run = function(index) {
        }
        for (let j = 0; j < array.length; j++) {
            function createParameters() {
                const parameters = [
                    {
                        border: `1px dotted ${randomRGBO(.1, .3)}`
                    },
                    {
                        border: `1px dotted ${randomRGBO(.7, 1)}`
                    },
                    {
                        border: `1px dotted ${randomRGBO(.1, .3)}`
                    }
                ]
                return parameters
            }
            let parameters = createParameters()
            let run_1 = getRandomInt(0, 10)
            const border_run = function() {
                console.log(run_1)
                if (run_1 >= 9) {
                    array[j].animate(parameters, options)
                    console.log("firing")
                }
            }
            border_run()
            setInterval(run(j), 10000);
        }
    }
    animateBorders()
    setInterval(animateBorders, 10000)

    // animateBorders()


// create event_listener to keyboard click to change duration of text

// create event_listener to keyboard click to change duration of animation_border

