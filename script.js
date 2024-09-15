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
    totalPoints += parseInt(document.getElementById('incompetence').value);
    totalPoints += parseInt(document.getElementById('isoimmunization').value);
    totalPoints += parseInt(document.getElementById('preeclampsia').value);
    totalPoints += parseInt(document.getElementById('psychosis').value);
    totalPoints += parseInt(document.getElementById('transplant').value);
    totalPoints += parseInt(document.getElementById('bariatric').value);
    totalPoints += parseInt(document.getElementById('accretism').value);
    

    // Intercorrências Clínicas/Obstétricas na Gestação Atual
    totalPoints += parseInt(document.getElementById('preeclampsia').value);
    totalPoints += parseInt(document.getElementById('diabetes').value);
    totalPoints += parseInt(document.getElementById('urinary').value);
    totalPoints += parseInt(document.getElementById('fetus-growth').value);
    totalPoints += parseInt(document.getElementById('macrosomia').value);
    totalPoints += parseInt(document.getElementById('polyhydramnios').value);
    totalPoints += parseInt(document.getElementById('shortneck').value);
    totalPoints += parseInt(document.getElementById('accretismsuspect').value);
    totalPoints += parseInt(document.getElementById('placentaprevia').value);
    totalPoints += parseInt(document.getElementById('liverdisease').value);
    totalPoints += parseInt(document.getElementById('anemia').value);
    totalPoints += parseInt(document.getElementById('isoimmunizationrh').value);
    totalPoints += parseInt(document.getElementById('cancer').value);
    totalPoints += parseInt(document.getElementById('neoplasm').value);
    totalPoints += parseInt(document.getElementById('breastcancer').value);
    totalPoints += parseInt(document.getElementById('cervicalcancer').value);
    totalPoints += parseInt(document.getElementById('fetalmalformation').value);
    totalPoints += parseInt(document.getElementById('twinning').value);
    totalPoints += parseInt(document.getElementById('syphilis').value);
    totalPoints += parseInt(document.getElementById('condyloma').value);
    totalPoints += parseInt(document.getElementById('hepatitis').value);
    totalPoints += parseInt(document.getElementById('leprosy').value);
    totalPoints += parseInt(document.getElementById('aids').value);
    totalPoints += parseInt(document.getElementById('tuberculosis').value);
    totalPoints += parseInt(document.getElementById('toxoplasmosis').value);
    totalPoints += parseInt(document.getElementById('drugs').value);
    totalPoints += parseInt(document.getElementById('endocrinopathies').value);
    totalPoints += parseInt(document.getElementById('dengue').value);
    totalPoints += parseInt(document.getElementById('covid19').value);

    // Condições Clínicas Prévias à Gestação
    totalPoints += parseInt(document.getElementById('hypertension').value);
    totalPoints += parseInt(document.getElementById('diabetes-previous').value);
    totalPoints += parseInt(document.getElementById('thyroid-diseases').value);
    totalPoints += parseInt(document.getElementById('psychiatric').value);
    totalPoints += parseInt(document.getElementById('hematology').value);
    totalPoints += parseInt(document.getElementById('heart-disease').value);
    totalPoints += parseInt(document.getElementById('pneumopathies').value);
    totalPoints += parseInt(document.getElementById('auto-immune').value);
    totalPoints += parseInt(document.getElementById('teratogenicity').value);
    totalPoints += parseInt(document.getElementById('kidney-disease').value);
    totalPoints += parseInt(document.getElementById('hemoglobin').value);
    totalPoints += parseInt(document.getElementById('liver-disease').value);

    // Definir nível de risco
    let riskLevel = '';
    if (totalPoints >= 10) {
        riskLevel = 'Alto Risco.';
    } else if (totalPoints >= 5) {
        riskLevel = 'Médio Risco.';
    } else {
        riskLevel = 'Baixo Risco.';
    }

    // Mostrar o resultado
    document.getElementById('risk-level').textContent = `Pontuação: ${totalPoints} - ${riskLevel}`;
}
