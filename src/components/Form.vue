    <template>
        <div class="center">
            <div id="box">
              <div id="login" class="off">Login</div>
                <div class="log">
                    <input type="text" id="phone" placeholder="Phone Number">
                    <input type="password" id="pass" placeholder="Password">
                    <div id="submit">Login</div>
                    <div id="guest">Guest</div>
                    <!-- <div id="google">Google</div>
                    <div id="fb">Facebook</div> -->
                </div>
              <div id="signup" class="on">Signup</div>

            </div>
        </div>
    </template>
    <script></script>
    <style scoped>
        .center{
                width: 336px;
                height: 512px;
                margin: 0px auto;
                box-shadow: 0px 0px 3px #999;
                border-radius: 3px;
                position: relative;
                padding-top: 64px;
                font-size: 1.2em;
                font-weight: bold;
                margin-top: -100px;
                background: #fff
        }
        div#box{
            position: absolute;
            top:0;
        }
        #login{
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 64px;
                text-align: center;
                line-height: 64px;
                cursor: pointer;
        }
        #signup{
                position: absolute;
                top: 0;
                right: 0;
                width: 50%;
                height: 64px;
                text-align: center;
                line-height: 64px;
                cursor: pointer;
        }
        .on{
                color: #fff;
                background-color: rgba(0,0,0,0.9);
        }
        .off{
                background: #f5f5f5;
                color: #000
        }
        div.log{
            margin-top: 84px;
        }
        #phone, #pass{
                width: 224px;
                height: 48px;
                border: 1px solid #999;
                margin: 10px auto;
                padding: 0 10px;
                box-sizing: border-box;
                position: relative;

        }
        #submit, #guest{
                width: 224px;
                height: 48px;
                line-height: 48px;
                border: 1px solid #f4b05d;
                margin: 10px auto;
                background: #F79B2B;
                color: #000;
                font-weight: bold;
                cursor: pointer;
        }
    </style>