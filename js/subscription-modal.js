function loadPage() {
    const dialog = document.querySelector('.payment-modal')
    const dialogCloseBtn = dialog.querySelector('.btn-close-dialog')
    const btnOpenDialogBasic = document.querySelector('#btn-join-basic')
    const btnOpenDialogPro = document.querySelector('#btn-join-pro')
    const screenCurtain = document.querySelector('.modal-curtain')
    const customAmountRadio = dialog.querySelector('#amt_custom')
    const customAmountInput = dialog.querySelector('#amt_custom_text')
    let currentDialogName = null

    function btnCloseClick() {
        closeDialog()

        if (currentDialogName) {
            dialog.classList.remove(currentDialogName)
        }
    }
    function focusInCustomInput() {
        customAmountRadio.checked = true
    }
    function openDialog(dialogName) {
        currentDialogName = dialogName
        dialog.removeAttribute('hidden')
        dialog.classList.add(currentDialogName)
        screenCurtain.removeAttribute('hidden')
        dialogCloseBtn.addEventListener('click', btnCloseClick)
        
        customAmountInput.addEventListener('focusin', focusInCustomInput)
    }
    function closeDialog() {
        dialog.setAttribute('hidden', '')
        screenCurtain.setAttribute('hidden', '')
        dialogCloseBtn.removeEventListener('click', btnCloseClick)
        customAmountInput.removeEventListener('focusin', focusInCustomInput);
    }
    btnOpenDialogPro.addEventListener('click', function(){ openDialog('pro')})
    btnOpenDialogBasic.addEventListener('click', function(){ openDialog('basic')})
}
document.addEventListener('DOMContentLoaded', loadPage)