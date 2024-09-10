function calculateRisk() {
    let totalPoints = 0;

    // Informações Individuais
    totalPoints += parseInt(document.getElementById('age').value);
    totalPoints += parseInt(document.getElementById('race').value);
    totalPoints += parseInt(document.getElementById('education').value);
    totalPoints += parseInt(document.getElementById('smoker').value);
    totalPoints += parseInt(document.getElementById('violence').value);
    totalPoints += parseInt(document.getElementById('housing').value);
    totalPoints += parseInt(document.getElementById('weight').value);

    // História Reprodutiva Anterior
    totalPoints += parseInt(document.getElementById('abortions').value);
    totalPoints += parseInt(document.getElementById('prematurity').value);
    totalPoints += parseInt(document.getElementById('growth').value);
    totalPoints += parseInt(document.getElementById('stillbirth').value);

    // Intercorrências Clínicas/Obstétricas na Gestação Atual
    totalPoints += parseInt(document.getElementById('preeclampsia').value);
    totalPoints += parseInt(document.getElementById('diabetes').value);
    totalPoints += parseInt(document.getElementById('urinary').value);
    totalPoints += parseInt(document.getElementById('fetus-growth').value);
    totalPoints += parseInt(document.getElementById('macrosomia').value);

    // Condições Clínicas Prévias à Gestação
    totalPoints += parseInt(document.getElementById('hypertension').value);
    totalPoints += parseInt(document.getElementById('diabetes-previous').value);
    totalPoints += parseInt(document.getElementById('psychiatric').value);

    // Definir nível de risco
    let riskLevel = '';
    if (totalPoints >= 10) {
        riskLevel = 'Alto Risco - Solicitar consulta por e-mail.';
    } else if (totalPoints >= 5) {
        riskLevel = 'Médio Risco - Unidade de saúde solicita consulta pelo SISREG.';
    } else {
        riskLevel = 'Baixo Risco - Acompanhamento pela equipe da unidade de saúde.';
    }

    // Mostrar o resultado
    document.getElementById('risk-level').textContent = `Pontuação: ${totalPoints} - ${riskLevel}`;
}
