<template>
  <div class="about">
    <h1>Contact us</h1>
    <p class="msg">Sometimes even superheroes wonder about something.
       Send a message to your favourite superhero community using the form below.</p>
    
    <form>
      <div class="contact">
        <label>Name</label>
        <input type="text" required>
        <label>Email</label>
        <input type="email" required>
        <label>Phone (optional)</label>
        <input type="number">
        <label>Message</label>
        <textarea rows="12" col="50"></textarea>
      </div>
      <br>
      <button type="button" class="btn">
        Send 
      </button>
    </form>

  </div>
</template>
