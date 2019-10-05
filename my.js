function show(x){
            v = document.getElementById(x);
            if(x=='header-links'){
                icon = document.getElementById('head-down-icon');
                if(v.style.display=='block'){
                    v.style.display='none';
                    icon.innerHTML='&#xe313;';
                }
                else{
                    v.style.display='block';
                    icon.innerHTML='&#xe14c;';
                }
            }
            else if(x=='sidebar'){
                sh = document.getElementById('sideHead');
                ps = document.getElementById('project-show');
                sh.style.display='none';
                if(v.style.display=='block'){
                    v.style.display='none';
                    ps.style.display='block';
                }
                else{
                    v.style.display='block';
                    ps.style.display='none';
                }
            }
        }
        function fun(y){
            c = document.getElementById(y);
            if(c.style.display=='block'){
                c.style.display='none';
            }
            else{
                c.style.display='block';
            }
        }