const SUPABASE_URL = '$JS_SUPABASE_DATABASE_URL';
const SUPABASE_KEY = '$JS_SUPABASE_ANON_KEY';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please!"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

async function handleYesClick() {
  const yesButton = document.querySelector('.yes-button');

  try {
    yesButton.disabled = true;

    const { error } = await supabase
      .from('button_clicks')
      .insert({
        action_type: 'yes_click',
        user_agent: navigator.userAgent,
        clicked_at: new Date().toISOString()
      });

    if (error) throw error;
    window.location.href = "yes_page.html";

  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao salvar: ' + error.message);
  } finally {
    yesButton.disabled = false;
    yesButton.textContent = 'Yes';
  }
}
