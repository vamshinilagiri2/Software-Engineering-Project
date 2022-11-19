async function converImageToBase64(inputId) {
  let image = $('#'+inputId)[0]['files']

  if (image && image[0]) {
    const reader = new FileReader();

    return new Promise(resolve => {
      reader.onload = ev => {
        resolve(ev.target.result)
      }
      reader.readAsDataURL(image[0])
    })
  }
}

async function proccessData() {
  const image = await converImageToBase64('asd')
  const base64image = image.substring(image.indexOf(',') + 1);
  console.log(base64image)
}
