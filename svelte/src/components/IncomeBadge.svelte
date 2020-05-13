<script>
  //Exports
  export let category;
</script>

<div class="transaction_badge income w-embed">

  {#if category === 'Sale'}
    <svg
      viewBox="0 0 38 38"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.7 21.2C7.5 18.4 1.8 21.2 7.1 23.8C12.4 26.5 6.8 29.9 4.5 26.8"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M18.2002 28L15.2002 20.1L12.2002 28"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M14 25H17"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M22 20V28H25"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M29 24H31"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M33 20H29V28H33"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M7.9 14H2.9C1.8 14 1 14.9 1 15.9V34.1C1 35.2 1.9 36 2.9
        36H7.5H31.3H35C36.1 36 36.9 35.1 36.9 34.1V15.9C36.9 14.8 36 14 35
        14H30H7.9V14Z"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M22.2002 5.5L29.7002 11.4"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M7.7998 11.7L15.7998 5.40002"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M1 33H37"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2
        16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  {:else if category === 'Saving'}
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.8 8.99999C4.3 10.3 1 15.1 1 21C1 25.7 2.9 29.9 6 32C6.6 32.4 7
        33.1 7 33.9V38.1H12V35.1C12 34.5 12.5 34.1 13 34.1H23C23.6 34.1 24 34.6
        24 35.1V38.1H29V33.6C29 33 29.3 32.5 29.7 32.1C31.4 30.8 33.2 29.5 34.2
        27.2C34.5 26.5 35.2 26.1 35.9 26.1H36C36.9 26.1 37.7 25.5 38 24.6L39
        19.1C39 18.1 38.5 17.1 37.3 17.1H36.1C35.4 17.1 34.7 16.7 34.4 16.1C33.7
        14.5 32.5 13.7 31.1 12.4V6.79999C31.1 6.19999 30.4 5.89999 30
        6.29999L27.4 8.89999H26.1"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M7.7999 13.9C6.0999 15.6 4.9999 18 4.8999 20.6"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M17.5 13C20.5376 13 23 10.5376 23 7.5C23 4.46243 20.5376 2 17.5
        2C14.4624 2 12 4.46243 12 7.5C12 10.5376 14.4624 13 17.5 13Z"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M31 16V18"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  {:else}
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 3H12V17H36V3Z"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909
        6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M34 7C32.8 7 32 6.2 32 5"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M14 13C15.2 13 16 13.8 16 15"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M14 7C15.2 7 16 6.2 16 5"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M34 13C32.8 13 32 13.8 32 15"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M29 26.7L36.8 25C37.6 24.8 38.5 25.2 38.8 25.9C39.1 26.7 38.6 27.5
        37.8 28L24.2 33.7C22 34.5 19.3 34.9 17 34.9C15.4 34.9 14.1 34.7 12.5
        34.4L11 33.9"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M11 35L8 37L1 24L4 22L11 35Z"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M16.9999 29H26.4999C27.8999 29 28.9999 27.9 28.9999 26.5C28.9999 25.1
        27.8999 24 26.4999 24H19.9999L19.0999 23.4C17.0999 21.9 14.5999 21
        11.9999 21C10.3999 21 8.7999 21.3 7.2999 22L4.8999 23"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  {/if}
</div>
