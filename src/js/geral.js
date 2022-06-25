
$('.slide-card').children('div').each(function(index){

    $(this).on('click swipe', function(){
        if($(this).attr('class') === 'invisible'){
                $(this).siblings('div').hide();
                $(this).next().show();
                $(this).prev().show();
                $(this).attr('class','visible')
                $(this).next().attr('class','invisible')
                $(this).prev().attr('class','invisible')
                if($(this).parent().children().first().attr('class') === 'visible'){
                    $(this).parent().css('justify-content','flex-end');
                }else if($(this).parent().children().last().attr('class') === 'visible'){
                    $(this).parent().css('justify-content','flex-start');
                }
                $('.navButtons').children('button').each(function(){
                    if($(this).attr('data-index') === index.toString()){                        
                        $(this).addClass('select');
                        $(this).siblings().removeClass('select');
                    }
                })


        }else{
            $(this).on('swipeleft', function(){
                if($(this).parent().children().last().attr('class') === 'visible'){
                    $(this).parent().css('justify-content','flex-start');
                }else{
                    var indexSomado = index + 1;
                    $(this).siblings('div').hide();
                    $(this).next().show();
                    $(this).next().next().show();
                    $(this).attr('class','invisible');
                    $(this).next().attr('class','visible')
                    if($(this).parent().children().first().attr('class') === 'visible'){
                        $(this).parent().css('justify-content','flex-end');
                    } 
                
                    $('.navButtons').children('button').each(function(){
                        if($(this).attr('data-index') === indexSomado.toString()){                        
                            $(this).addClass('select');
                            $(this).siblings().removeClass('select');
                        }
                    })
                }
            })

            $(this).on('swiperight', function(){
                if($(this).parent().children().first().attr('class') === 'visible'){
                    $(this).parent().css('justify-content','flex-end');
                }else{
                    var indexSomado = index - 1;
                    $(this).siblings('div').hide();
                    $(this).prev().show();
                    $(this).prev().prev().show();
                    $(this).attr('class','invisible');
                    $(this).prev().attr('class','visible')
                    if($(this).parent().children().last().attr('class') === 'visible'){
                        $(this).parent().css('justify-content','flex-start');
                    }
                    $('.navButtons').children('button').each(function(){
                        if($(this).attr('data-index') === indexSomado.toString()){                        
                            $(this).addClass('select');
                            $(this).siblings().removeClass('select');
                        }
                    })
                }
            })

        }
    })

    var button = $('<button/>');
    button.attr('data-index',index);
    if(index === 1){
        button.addClass('select');
    }
    $('.navButtons').append(button);
})
