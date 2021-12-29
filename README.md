# WhatsApp-Spammer
A simple JavaScript snippet to spam a WhatsApp chat with a message repeating a fixed number of times. It requires the user to login to WhatsApp web on a computer on any modern browsers.
The user can directly use this tool from the chat once the code is injected to the console.

## How to use
- Login to WhatsApp web through https://web.whatsapp.com/
- Inject (paste) the code to browser's console (Find console in developer tools section of the browser's menu)
- Close the console and open a chat
- Type the message with #n# **at the end** to repeat the message n times (n should be a postive integer)

## Examples
- `Hi there!#5#` sends `Hi there!` five times <br/>
- `Hi there!` sends `Hi there!` once <br/>
- `#5# Hi there!` sends `#5# Hi there!` once <br/>
- `Hi there!#2#3#` sends `Hi there!#2` three times <br/>

## Warning
- WhatsApp may ban your account temporarily if you spam way too much, especially if you send over 10k messages a day

## Tips
- Send messages in chunks smaller than 500 messages in a go to avoid browser from hanging.
- For effiecient spamming, Logon to pc using Multi-device beta feature on WhatsApp and turn off the internet on other connected devices 
