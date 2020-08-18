const colors = {
    p: '#FF8C00	',
    div: '#006400',
    span:'#FF0000',
    section:'#FF1493',
    ul:'#4B0082',
    ol:'#A0522D',
    header:'#7CFC00',
    nav:'#00FA9A',
    main:'#008080',
    footer:'#4682B4',
    form:'#000080',
    body:'#DC143C',
    padrao:'#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const nomeDaTag = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(nomeDaTag)
    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(nomeDaTag)
        label.innerHTML = nomeDaTag
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})
//pegou o nome do elemento,caixa,tag com .tagName como queira chamar
//aplicou uma cor em cima da borda desse caixa
//se ele nao estiver marcado com nolabel ele vai adicionar dentro 
//desse caixa um label antes do primeiro caixa filho que esteja eventualmente presente nessa tag 
//classLIst faz uma lista de classes desse caso so tem clases tag
//está contido o nolabel em cada caixinha?
//ctrl d muda todos os nomes de uma variavel