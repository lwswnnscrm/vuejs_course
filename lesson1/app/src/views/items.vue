<template lang="html">
  <div class="contact">
    <!-- Выводим выбранный цвет как иконку юзера если его нет будет стандартный цвет который мы задали стилями  -->
    <div class="icon-user" :style='{ background: contact.color }'>
      <!-- выводим первую букву юзера  -->
      {{ icontText }}
    </div>
    <div class="name-phone">
      <p>{{ contact.name }}</p>
      <p>{{ phoneFormat }}</p>
    </div>

    <button type="button" @click='editContact' class="edit"></button>
    <button type="button" @click='deleteContact' class="delete"></button>
  </div>
</template>

<script>
export default {

  props: ['contact'],

  computed: {

    icontText() {
      //обрезаем все кроме 1й буквы
      return this.contact.name.slice(0, 1);
    },

    phoneFormat() {
      return this.contact.phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4");
    }

  },

  methods: {
    deleteContact() {
      //При нажатии на удалить мы передаем события удаления в компонент родителя
      //Куда передаем id элемента который нужно удалить
      this.$emit('delete-contact', this.contact)
    },
    editContact() {
      this.$emit('edit-contact', this.contact)
    }
  }

}
</script>

<style lang="scss">

  // сново импорт переменных в компонент
  @import '@/style/_vars.scss';

  .contact {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid $grey;
    padding: 10px 0;
    position: relative;
    &:last-child {
      border-bottom: 0;
    }
    .name-phone {
      padding-left: 30px;
    }
    p {
      margin: 0;
      font-size: 12px;
      color: $dark;
      &:first-child {
        padding-bottom: 5px;
      }
    }
  }

  .icon-user {
    background: $grey;
    color: $dark;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    border-radius: 50%;
  }

  .delete {
    background: url('http://cdn.onlinewebfonts.com/svg/img_416864.png') center center no-repeat;
    width: 25px;
    height: 25px;
    border: 0;
    background-size: 80%;
    outline: none;
    position: absolute;
    right: 0;
    outline: none;
    cursor: pointer;
  }

  .edit {
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX////z8/MAAAD09PT+/v79/f319fX29vb4+Pj7+/v39/f6+vr8/Pz5+fkEBAR2dnapqal1dXVHR0enp6c9PT02Njbq6upaWlqurq7FxcVCQkJVVVUaGhqSkpIfHx/Y2Nifn5/Ly8ve3t5iYmK+vr5/f39qamonJycPDw8yMjKYmJhPT0/l5eQeHh2Hh4cXFxfa9UezAAAPuUlEQVR4nN1daWObPAwmhPvounZr3q3rkjZru+78///uBXzhQz7AgLN82JJURnqwhB5bCkQReiWJ9CaC3iwv6/dww6sp0cekaegb9Je0pG9SSFYSUclGgCwRcZF1MRO96gJ9nbQt+jptayxXlOhNWTQTZFujLDlcRESobENkp6kmxx1eRY6+TqocfZ3mFTpEmbdYf15LslhLXkSibElksUXkcA2RrdnhsKykWiUrqZbNLAXZ4ajFHn2dZHukpdlnaGS9q/CAHT5Evscj93tsyC7HByey1Q5blGHZlMiWTLbgZanqlKguFaonmDn4bI1xd0abR+5E2V0W8bIM4M4FICRbEFlZ9V5ULZs5OG+DPZedxp1XgAkzOgMBgidDBpgx1bCZWHVeJGQee0N2EsBcGJkxgMRFqdETZjBnAAXVpaSanVsmGwEA2bkdDoezxnhW3GdwEkCFi8oAQRc1m0lVCyMtnPtCYpDIYi1mF/UcgwoXtYhB2UwwBnmAsNFhxaCNmcK5xVrmpIlZMajJmVoXtTYz7f9LqmXyYGITgw5pwgqg4KJpnfYkL18kBue6qARwQgw21ZDxW+P113MM6qiazbk1mUlVN1n/lwSvQ/7BNNEgEZzxw6ZqkRWjFF2UqCYjoVOzeZooj8e7ms4DbKa06BkDDJmqneLu9WeCmfkY4AYxuLME+C6Or67i+KaZaGbCaQmQqmGAcXyIkikxOGT8NF8rTbjHIAUYx/dZJZxbXQziw5V9ACdtFeyK/pkB7CBCADVmVr2ipnaf+5Wo2mgG+zdnVzPbrNeYkN03XQwKLrocVYNcFL05uKUJqpo32gLgSmlCAtg5apNBl4pUikFqphngNjGoANjNYuFuJv60cJoYybqmiRFAEotOlwr+k5VzrxKD78dXUQr0Cl1RLdIENTNBWoKjalyaeP7BAPYQazNVo2Y2/R+afH2q5uCi8bsoemAAu1jEu/s2Llr3qTAt2mUBuq/oRYADRBqMfdLQA6QzWAwZvyTVmmBW9BzAZ/SXBxaMmN1IqhU1oqw/HMn44aSJZ2kG+2l4GF1t+ll0uVTMB+h1RS+7KFL9MLraxOcis2eUPMCQVhMcQByL5E/39tlMpSUQqkZikMxKD5EG4z2nWlOnBQFuE4MvY4DvBdX0ckNi0cbMBFkUClXTAix2GCIWOUS52cyhOkrL/GHFoOCiSPYhHon8xNZpXHTo1UiLeqxlw+LLsxHgOBZp6tcArIaWE9JqExRVu4oflQCF1H8wmJkNlad0EYDzqFr/5lEJME8fmAjegSOqITPJp4CoGnrzCVjVPYyuNmwHzgRw8zShWvB+KtWLnodxvB6WA7gYVWPWf5IAosPRWJR34MwAA0gTjLcgiPKKnk/99zozhb62IFb034nxV2gWVYRLTP0wwBr1tblv/C4Wg/G7u68MYA9RTbi41P9fAwHk+9o2L74MAKPo7st4EYFjUVrRP4wW/TfQPGR8X1sIMTgwmW4WmfUYoqQ6OrNYfIXMHPpQFX1tSG6Wi06kang9ePeXWo8hyq1c1yORz3oznQF6Lb68VwCsq1+/R1ebjt3IrVxjgPHJL8BVVvTD5YYG47dabOXiAH60Ahjair673FyJqT9VA7yp1prBuWmCV91DpJeSASLgojc7nZlCX9uGxRdpRd88/WUA+1gEAH5UzSA1k/S1BVB8kRe8CUn92FFL4na3Y4AfGp2ZpK9tmxhUpQl+udQnDSbyDf1FcNFMaybf17Zx8UUGiFI/wRPjVT8H8PNeb+a4r2374otqRf/rC8UTI4h8DLZWZvIANyy+KFb0BYpFIvuJj8HPUwAGkCb4k9HTcCb7h4tBg4s6Alyl+CIC7A83pP6Yf6GrqOoiIzPK4WO65WoCBEhU3/1mwMYxqE0TVHWD+trAHdXViy+KIliLaTgPUE/VqGrc11YIWlaMQbk2odiyGGJRAKilalQ16msraxPA9aga0CczTv0WVI2ZyfW1BVN8URm9e4u5GbSLQVpTmw7Qz4re5sdZP8ZX0Z7AuZjJa9meqinaSHgmE/fsZhWAS1E1M0BGw1eaQc9UTfqBpAQQ3oGTzUzQ14FRteG48AzSHTgLM/m+tnComhlgH4sWZvJ9bSFRNbardgsAZDtwGjOLaqhyl+4AZ1I1o4sCMfjz6atmB05h5tA4RarcgVE1lYt2K/qOhgs7cFoz8eSpAS5afIEAamPwY3fIUrEDZzITABgAVRNi8HPdmwntwMFmugN0p2pe0gRd0St34DRmqgEuX3xxddEPbMtCsQOnAZigr4OiasriSzkymiyJ6Q6cxkzc1+aZqs1Y0VsVX6QdONjMoaMtJTcgCpeqSSv6Ye+G0XC6xBXNHO7eQvva3Fb0nvOgPk3kkurucjPagbuD5oHra1u++DKVqimLL9hR0VS+05tpDXBpqga5qLL4Uvx6Y1ebN62ZEwCuupoAii9V84Fdbd7sAWry4EYreqD4UlUjgPGLZxddlaqpARb7McD4qZEBYjNJX1uwaQJw0fwDFele/0WwmWJfm78VvR+qpi6+VC03gyqA9IKEqtyEnQSwoudjUL3xW2QAQNlMrq9tw+KLW59MtTfOIGWU47628Fb0QPGlKqxjUN0VtVXxRQIIFF/AGIQ3Hni4K/TJzKBqfZr4qJ5B2EwTwK1W9Oo+mSqzd1EMMOFOY/BUrTUC3AkAUV9bHhxVq9UuWgEAYTMb7u4tWxZfHKiaDqDEKLm+tn+Iqqn72oIpvnyQV/S2VE1yNNTXFvFGb118mU/VJDMBgBsVX25UM+hG1cSbSdsDXKn4ok4TH40AoXnAnwIqvsykaiLA4WPjOwYnr+hLXZqYBFDsawuk+MIDrKCLjM5FsWq+r23rFb2eqtms6KUYbLm+ts2pGuCi+XQXLbi7t2xQfOFi8EZ1kdHEoAujBAGGEIMQ2bYy0wBw6+KLK1WzBBhS8WUeVbN30e2KL1ZUDUoTVHWCLFp8NTGJqtXTqRpVXaK+tjCLL4UHF21RX1vtPnIKVYNW9MCWhZmqmWtElbKvLZA0ASV6nZmSamVf28UVX8x3rCefglrRz6FqaoCXW3yZDvBCii+OAAMpvtTOxRfITFrlvvTiCzyD5KlkARZfJlI1cQbx3VtKcmous/iimUHc15aSkeEUX/ykCeGpZN6LL3qqBnDRCcUXDUBybvHIAKha7mNFDwEMgart0X2DtDFoneglgAFQtX305DFNQC7qhapNK750st9MaQIqvsAAUcav1qVq8I0CPhkA2qcJ7qlkEXsq2YbFl0H1r6lpQkz0FCD3VLJ1qBpQfMGyz1jUUwzip5KVUNvXimkCq272Lw4uClI14TkCYF/bisWX0TbE458/p7t5VE16RBsauWXxRTy3pRcXpXf7sDs1f7z0yaiLLx5/S825KA/Q4KK/lo/Bia0ERhdNrAB2U7FY8cWm89pYfFHNIL6+oL4249y/xLOpmv62Yz7aeVQuCvS1SdffNI6NAE0uClI1NUCX4gs8gyV6KpnY1yY/QfJIAZ4nAjSliUn9SsYYrPHdW4wcqD4RY+MjCNC9+DL3BzrGNEFrasaR6YEA/F6pAU4rviwcg+ypEcJImQNFxFj46XWrpQkzVZMedGkCmO1xGPa2/gAAuq/o3X4k53MGpZGdn1wTgH0Y+vrly+IxiM1MEG79QutAAH7deyu+LEzV2G1QUZVb79ztK+FsB2/Fl6XTBDGz5vraFDE4+MkTJaWnyDlNWN52DKZqFsUXeAb5vjZ1DEZjUvooPYMuSKrGbgolPJUMOjWMlGZ0tmcVX+ZRNfsZJDU108iM/i78J5X1s6L3mybgBz5DAMkvhQkpvRpufe4A0PIOsd7SRKIHCJ6a9kQZzZGXnVZ8sQA4ofiiclHDDNK5L18oozFoCWFFLwNM0NcyVWOnhhp9FrRMKr6sRNUqrq+NPpVMisGeAz1Ro0+RfZrYmKqBfW2qpfI1MboPQ2uqNn1F74OqiX1tDTRycO4DAfhldylUbdTXNuxDpcJIwU++k4LeeTGqNqlPxsJFiZnQqUEjj4yUJrZUzW5nezGqJpoJjxy0XI9I6WppYh5VAzoTZedGWs6ElH65oxckfgaP1/chUjXIRUU/2b2KpJSOrDrLnm4PMX3p+mRWp2p0HgZJ+KlkqURKSZqI7o6nF/K30QxuUnzR7KzgvjZw7iVSik5Nfbw9v9KZC5CqiX1tjXAa2dynAilt2z7uDtR1BYDAj5QXLr5oXDTnn0q2kxJMUX4n1g8PGN51c8d5pgBw2xW9glFCTyVjp4aR0uvy6fZFxCW4qEeqZlN8gQGKjJIfyTn3LbE+/vwmeyYPcKPii8XeGNIi+gkaeWZNWLJnjqqm3etZxWRWKL5YAoTmfgRQxkXffPl5exzPSggxKLhoJjIZPPI4BqhG+vf843GHDrNh8UUz28PqogIAjkip2jPPp6csass5AL1QtQp0UfJUMogDHWIY4M/TkTvlIazopfCXnkomAIxE3oLfvB5Oj9ToCQCXpmqsi4x/Kpns3OmbOHHd+/OP476jc4JsGGlCOhno7i2470TBgfpOKA7g/elYRCo/WbP4YqRq6q4o9dzno2vm/emxFGRXejSN24qexSA5nPbUPA1++vt8OtZRXQkjvT8eyr5PxqLzWgAIOnf97eF0HPKd7jSGEIOQiyacFtWGYwSMnARw8RW9vIbvP6e5w/V3losuVXyBzSy5vjar66/nJ3nCP1KelyawavRUsqF9DxgJzb1Vmlir+AKbyT+VzIYDbZcmnKialILBkdD1NzCqZjQTGGnlJyGkCfhSoZ/BmTHop/gi743Zm2maQZgDBUnVNC6aIC3219/lqNqM4osKID6c2Nc2w0U3LL5oXJR/KpnLyMCoGpTN+KeSLZUmZKq21IpeNhPdvaURRq5I1RZOE9RMcaTXNDHrR8qTVvTyPPAjQ6JqVsUXs5lqLStQNa/FF42ZzlrCoGqwi4oxmKCvV6NqDj9S9hODfF9b2FRt0sYD/1SyC6NqKjNFF62KYQppX1vIVM1mRS+bKfS1BUXVBIATs9moRno5K3r3zT+TloulaiLAhanarF++zFr0SCMDpGoWxRfYTLCv7bKKLwozsepEfCrZv0LVqJl8X9ulFl80jqZ+KtmlFV90ZkJ9bTMArpgmQKoGNA35Brha8cVsJhpJbo3RZGQbjv7WMCMsNsNaslySJbt1WUkOh12UyJZEtiWylUI2wrIFkRVV57Jq2UxBNRpZFOhTWmH9ZYUH1BVeebRFapZtiAjWQmQbJksOx2SFwzWy6spadVSIZqJPJblXVI2PmdZ4QEPelDUeWYuyDZPFIiWuSGpk6eGI6sRC9SQzU/bv6E2SJtIbQcRFViWSOBzORVYyM/kfyIwjPBM+jWIAAAAASUVORK5CYII=') center no-repeat;
    width: 25px;
    height: 25px;
    border: 0;
    background-size: 100%;
    outline: none;
    position: absolute;
    right: 25px;
    outline: none;
    cursor: pointer;
  }

</style>
