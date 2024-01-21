export const InseService = {
    async getSchoolData() {
        const res = await fetch("/inse-2021-escolas.json");
        const data = await res.json();
        return data//.slice(0, 30);
    }
}